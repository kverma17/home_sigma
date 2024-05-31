import json
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
		details = [PropertySerializer(property).data for property in Property.objects.all()]
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
