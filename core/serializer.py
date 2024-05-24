from rest_framework import generics, serializers 
from . models import Property, ListingType


class PropertySerializer(serializers.ModelSerializer): 
	class Meta: 
		model = Property
		fields = '__all__'
		# fields = ['name', 'detail', 'description', 'builder', 'location', 'price', 'street', 'city', 'state', 'zip', 'country', 'listing_type']


class RentPropertyList(generics.ListAPIView):
    serializer_class = PropertySerializer

    def get_queryset(self):
        rent_listing_type = ListingType.objects.get(name='Rent')
        return Property.objects.filter(listing_types=rent_listing_type)


class SellPropertyList(generics.ListAPIView):
    serializer_class = PropertySerializer

    def get_queryset(self):
        sell_listing_type = ListingType.objects.get(name='Sell')
        return Property.objects.filter(listing_types=sell_listing_type)
