from django.db import models 

# Create your models here. 


class Property(models.Model): 
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=30)
    detail = models.CharField(max_length=100, blank=True)
    description = models.CharField(max_length=500, blank=True)
    builder = models.CharField(max_length=30, blank=True)
    location = models.CharField(max_length=30, blank=True)
    price = models.IntegerField(null=True, blank=True)
    street = models.CharField(max_length=30, blank=True)
    city = models.CharField(max_length=30, blank=True)
    state = models.CharField(max_length=30, blank=True)
    zip = models.IntegerField(null=True, blank=True)
    country = models.CharField(max_length=30, blank=True)
