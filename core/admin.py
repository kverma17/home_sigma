from django.contrib import admin
from .models import Property, ListingType, Header, Leads, LeadHistory, PropertyImage
# Register your models here.

admin.site.register(Property)
admin.site.register(ListingType)
admin.site.register(Header)
admin.site.register(Leads)
admin.site.register(LeadHistory)
admin.site.register(PropertyImage)
