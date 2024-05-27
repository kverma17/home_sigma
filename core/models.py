from django.db import models 

# Create your models here. 


class Header(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)
    values = models.CharField(max_length=200)
    url = models.CharField(max_length=200)


class ListingType(models.Model):
    name = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.name


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
    listing_types = models.ManyToManyField(ListingType)
