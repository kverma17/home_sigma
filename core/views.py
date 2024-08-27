import json
import re
from django.db.models import Q
from django.forms.models import model_to_dict
from rest_framework import generics
from rest_framework.views import APIView 
from rest_framework.decorators import api_view
from rest_framework.response import Response 
from . models import *
from . serializer import *
from .db_service import DbService
# Create your views here. 

class HeaderView(APIView):
    
    serializer_class = HeaderSerializer

    def get(self, request):
        details = [HeaderSerializer(header).data for header in Header.objects.all()]
        resp = {
        }
        for detail in details:
            name = detail['name']
            values = detail['values']
            url = detail['url']
            if name not in resp:
                resp[name] = []
            resp[name].append({values: url})
        return Response(resp)


class PropertyView(APIView): 
    
    serializer_class = PropertySerializer 

    def get(self, request):
        query_params = request.GET
        details = []
        search_param = query_params.get('q')
        category = query_params.get('category')
        listing_type = query_params.get('type')
        min_price = query_params.get('min_price')
        max_price = query_params.get('max_price')
        builder = query_params.get('builder')
        location = query_params.get('location')
        bedrooms = query_params.get('bedrooms')
        limit = int(query_params.get('limit', '6'))

        filters = Q()
        if search_param:
            filters &= Q(name__icontains=search_param) | Q(builder__icontains=search_param) | \
                Q(description__icontains=search_param) | Q(location__icontains=search_param)
        if category:
            filters &= Q(category=category)
        if listing_type:
            # Convert comma-separated string to list
            listing_type_names = listing_type.split(',')
            # Retrieve the IDs of the listing types
            listing_type_ids = ListingType.objects.filter(name__in=listing_type_names).values_list('id', flat=True)
            # Filter properties by listing type IDs
            filters &= Q(listing_types__id__in=listing_type_ids)

        if min_price is not None:
            filters &= Q(price__gte=min_price)

        if max_price is not None:
            filters &= Q(price__lte=max_price)

        if builder:
            filters &= Q(builder__icontains=builder)

        if location:
            filters &= Q(location__icontains=location)
        
        if bedrooms is not None:
            filters &= Q(bedrooms__gte=bedrooms)

        property_objs = Property.objects.filter(filters).distinct()

        # Slice the queryset to get only the records for the current page
        paginated_property_objs = property_objs[:limit]

        # Serialize the data
        serialized_data = PropertySerializer(paginated_property_objs, many=True).data

        # Agent details
        for property_data in serialized_data:
            created_by = property_data['created_by']
            agent = Users.objects.filter(name=created_by).first()

            if agent:
                agent_details = model_to_dict(agent)
                agent_details['photo'] = agent.photo.url if agent.photo else 'https://homesigmaimages.s3.amazonaws.com/user_images/2606517_5856.jpg'
                property_data['agent_details'] = agent_details

        return Response(serialized_data)

    def post(self, request): 
        serializer = PropertySerializer(data=request.data) 
        if serializer.is_valid(raise_exception=True): 
            serializer.save() 
            return Response(serializer.data)


class PropertyDetailView(APIView):

    serializer_class = PropertySerializer 

    def get(self, request, pk):
        property_obj = Property.objects.filter(id=pk).first()
        property_data = PropertySerializer(property_obj).data	
        if property_obj:
            # property_data['description'] = re.sub(r'(\r\n|\r|\n)', '<br>', property_data['description'])

            listing_types = property_data['listing_types']
            property_data['listing_types'] = []
            for l_type in listing_types:
                type_name = ListingType.objects.filter(id=l_type).values_list('name', flat=True).first()
                property_data['listing_types'].append(type_name)

            # Agent details
            created_by = property_data['created_by']
            agent = Users.objects.filter(name=created_by).first()

            if agent:
                agent_details = model_to_dict(agent)
                agent_details['photo'] = agent.photo.url if agent.photo else 'https://homesigmaimages.s3.amazonaws.com/user_images/2606517_5856.jpg'
                property_data['agent_details'] = agent_details
            
            images = PropertyImage.objects.filter(property_id=property_obj.id)
            property_data['images'] = [image.image_url.url for image in images]

        return Response(property_data)


class LeadsView(APIView):

    serializer_class = LeadsSerializer

    def get(self, request):
        lead_details = [LeadsSerializer(lead).data for lead in Leads.objects.all()]
        return Response(lead_details)

    def post(self, request):
        serializer = LeadsSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            lead_obj = serializer.save()
            DbService.insert_lead_history(lead_id=lead_obj.id, comments="Lead Generated")
            return Response(serializer.data)


class LeadHistoryView(APIView):

    serializer_class = LeadHistorySerializer

    def get(self, request, pk):
        lead_history = [LeadHistorySerializer(lead).data for lead in LeadHistory.objects.filter(lead_id=pk)]
        return Response(lead_history)


class BuildersView(APIView):

    serializer_class = BuilderSerializer

    def get(self, request):
        builder_details = [BuilderSerializer(builder).data for builder in Builder.objects.all()]
        return Response(builder_details)


class LocationsView(APIView):

    serializer_class = LocationSerializer

    def get(self, request):
        location_details = [LocationSerializer(location).data for location in Location.objects.all()]
        return Response(location_details)

# Autocomplete API
@api_view(['GET'])
def autocomplete(request):
    term = request.query_params.get('term', '')
    results, properties, prop_seen = [], [], {}
    if term:
        properties = Property.objects.filter(
            Q(name__icontains=term) | Q(builder__icontains=term) | Q(city__icontains=term)
        ).values('id', 'name', 'builder', 'url').distinct()

    for prop in properties:
        property = {
            'name': prop['name'],
            'url': prop['url'],
            'id': prop['id'],
        }
        if prop['id'] not in prop_seen:
            results.append(property)
            prop_seen[prop['id']] = 1

    return Response(results)

