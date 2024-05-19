from rest_framework import generics
from rest_framework.views import APIView 
from . models import *
from rest_framework.response import Response 
from . serializer import *
# Create your views here. 

class PropertyView(APIView): 
	
	serializer_class = PropertySerializer 

	def get(self, request): 
		# details = [ {"name": detail.name,"detail": detail.detail} 
		# for detail in Property.objects.all()] 
		details = [PropertySerializer(property).data for property in Property.objects.all()]
		return Response(details) 

	def post(self, request): 
		serializer = PropertySerializer(data=request.data) 
		if serializer.is_valid(raise_exception=True): 
			serializer.save() 
			return Response(serializer.data) 

class PropertyDetailView(generics.RetrieveUpdateAPIView):
    queryset = Property.objects.all()
    serializer_class = PropertySerializer
