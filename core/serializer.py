from rest_framework import serializers 
from . models import Property

class PropertySerializer(serializers.ModelSerializer): 
	class Meta: 
		model = Property
		fields = ['name', 'detail', 'description', 'builder', 'location', 'price', 'street', 'city', 'state', 'zip', 'country']
