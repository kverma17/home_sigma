from rest_framework import generics, serializers 
from . models import Property, ListingType, Header, Leads, LeadHistory, Builder, Location


class HeaderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Header
        fields = '__all__'


class PropertySerializer(serializers.ModelSerializer): 
	class Meta: 
		model = Property
		fields = '__all__'


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


class LeadsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Leads
        fields = '__all__'


class LeadHistorySerializer(serializers.ModelSerializer):
    class Meta:
        model = LeadHistory
        fields = '__all__'


class BuilderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Builder
        fields = '__all__' 


class LocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Location
        fields = '__all__' 
