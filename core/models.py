from django.db import models 

# Create your models here. 


class Header(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)
    values = models.CharField(max_length=200)
    url = models.CharField(max_length=200)


class ListingType(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.name


class Property(models.Model): 
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)
    url = models.CharField(max_length=50)
    detail = models.CharField(max_length=100, blank=True)
    description = models.CharField(max_length=500, blank=True)
    category = models.CharField(max_length=50, blank=True)
    builder = models.CharField(max_length=30, blank=True)
    location = models.CharField(max_length=30, blank=True)
    price = models.IntegerField(null=True, blank=True)
    payment_plan = models.CharField(max_length=30, blank=True)
    hand_over = models.CharField(max_length=10, blank=True)
    available_units = models.CharField(max_length=10, blank=True)
    attractions = models.CharField(max_length=255, blank=True)
    features = models.CharField(max_length=255, blank=True)
    brochure_link = models.CharField(max_length=255, blank=True)
    community = models.CharField(max_length=50, blank=True)
    community_description = models.CharField(max_length=500, blank=True)
    community_image_url = models.URLField(max_length=255, blank=True)
    street = models.CharField(max_length=30, blank=True)
    city = models.CharField(max_length=30, blank=True)
    state = models.CharField(max_length=30, blank=True)
    zip = models.IntegerField(null=True, blank=True)
    country = models.CharField(max_length=30, blank=True)
    listing_types = models.ManyToManyField(ListingType)
    created_at = models.DateTimeField(auto_now_add=True)
    created_by = models.CharField(max_length=32, blank=True)
    updated_by = models.CharField(max_length=32, blank=True)
    updated_at = models.DateTimeField(auto_now=True, editable=False, blank=False, null=False)


class Leads(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=30)
    mobile = models.CharField(max_length=12, blank=True)
    email = models.EmailField(blank=True)
    interests = models.CharField(max_length=30, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)


class LeadHistory(models.Model):
    id = models.AutoField(primary_key=True)
    lead_id = models.IntegerField()
    comments = models.TextField()
    updated_at = models.DateTimeField(auto_now=True, editable=False, blank=False, null=False)


class PropertyImage(models.Model):
    id = models.AutoField(primary_key=True)
    property_id = models.IntegerField()
    image_url = models.URLField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.image_url
