import json
from django.db.models import Q
from rest_framework import generics
from rest_framework.views import APIView 
from . models import *
from rest_framework.response import Response 
from . serializer import *
from .db_service import DbService
# Create your views here. 

class HeaderView(APIView):
	
	serializer_class = HeaderSerializer

	def get(self, request):
		details = [HeaderSerializer(header).data for header in Header.objects.all()]
		resp = {}
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
		listing_type = query_params.get('type')
		min_price = query_params.get('min_price')
		max_price = query_params.get('max_price')
		builder = query_params.get('builder')
		location = query_params.get('location')
		filters = Q()
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
		property_objs = Property.objects.filter(filters).distinct()
		for property_obj in property_objs:
			details.append(PropertySerializer(property_obj).data)
		return Response(details) 

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
			listing_types = property_data['listing_types']
			property_data['listing_types'] = []
			for l_type in listing_types:
				type_name = ListingType.objects.filter(id=l_type).values_list('name', flat=True).first()
				property_data['listing_types'].append(type_name)
			images = PropertyImage.objects.filter(property_id=property_obj.id).values_list('image_url', flat=True).all()
			property_data['images'] = images
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
