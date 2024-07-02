from django.contrib import admin
from .models import Property, ListingType, Header, Leads, LeadHistory, PropertyImage
# Register your models here.

admin.site.register(ListingType)
admin.site.register(Leads)
admin.site.register(LeadHistory)

@admin.register(Header)
class HeaderAdmin(admin.ModelAdmin):
    list_display = ('name', 'values', 'url')
    search_fields = ('name',)

@admin.register(Property)
class PropertyAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'price', 'location', 'created_at')
    search_fields = ('name', 'builder', 'location')
    list_filter = ('created_at', 'updated_at')

@admin.register(PropertyImage)
class PropertyImageAdmin(admin.ModelAdmin):
    list_display = ('property_id', 'image_url', 'created_at')
    search_fields = ('property_id',)
    list_filter = ('created_at',)