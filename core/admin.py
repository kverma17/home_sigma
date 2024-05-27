from django.contrib import admin
from .models import Property, ListingType, Header
# Register your models here.

admin.site.register(Property)
admin.site.register(ListingType)
admin.site.register(Header)
