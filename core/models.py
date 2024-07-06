import os
from django.db import models 
from django import forms
from django.core.exceptions import ValidationError
from PIL import Image
from io import BytesIO
from django.core.files.base import ContentFile

# Create your models here. 


class Header(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)
    values = models.CharField(max_length=200)
    url = models.CharField(max_length=200)

    def __str__(self): 
         return self.name

    class Meta:
        verbose_name = "Navigation"

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
    description = models.TextField(blank=True)
    category = models.CharField(max_length=50, blank=True)
    label = models.CharField(max_length=255, blank=True)
    builder = models.CharField(max_length=30, blank=True)
    location = models.CharField(max_length=30, blank=True)
    price = models.IntegerField(null=True, blank=True)
    payment_plan = models.CharField(max_length=30, blank=True)
    hand_over = models.CharField(max_length=50, blank=True)
    available_units = models.CharField(max_length=10, blank=True)
    bedrooms = models.CharField(max_length=50, blank=True)
    attractions = models.CharField(max_length=255, blank=True)
    features = models.CharField(max_length=255, blank=True)
    brochure_link = models.CharField(max_length=255, blank=True)
    thumbnail = models.ImageField(upload_to='property_images/')
    community = models.CharField(max_length=50, blank=True)
    community_image_url = models.ImageField(upload_to='property_images/', blank=True)
    community_description = models.TextField(blank=True)
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

    def clean(self):
        if self.category and not Header.objects.filter(values=self.category).exists():
            raise ValidationError(f'Category "{self.category}" does not exist in Header values.')

    def save(self, *args, **kwargs):
        self.clean()  # Perform the validation check
        super(Property, self).save(*args, **kwargs)

class PropertyForm(forms.ModelForm):
    category = forms.ModelChoiceField(
        queryset=Header.objects.filter(name__in=['Buy', 'Rent', 'Sell']).values_list('values', flat=True),
        to_field_name='values',
        empty_label="Select Category"
    )

    class Meta:
        model = Property
        fields = '__all__'
        labels = {
            'detail': 'Headline',
            'label': 'Tags',
            'attractions': 'Nearby Famous Places',
        }
        help_texts = {
            'category': 'One of the Navigation values',
            'label': 'Comma seperated tags',
            'features': 'Comma seperated tags',
        }


class Leads(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=30)
    mobile = models.CharField(max_length=12, blank=True)
    email = models.EmailField(blank=True)
    landing_link = models.CharField(max_length=100, blank=True)
    generated_by = models.CharField(max_length=30, blank=True)
    interests = models.CharField(max_length=100, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)


class LeadHistory(models.Model):
    id = models.AutoField(primary_key=True)
    lead_id = models.IntegerField()
    comments = models.TextField()
    updated_at = models.DateTimeField(auto_now=True, editable=False, blank=False, null=False)


class PropertyImage(models.Model):
    id = models.AutoField(primary_key=True)
    property_id = models.IntegerField()
    image_url = models.ImageField(upload_to='property_images/')
    created_at = models.DateTimeField(auto_now_add=True)

    def save(self, *args, **kwargs):
        # Open the uploaded image
        img = Image.open(self.image_url)

        # Resize and compress the image
        output_size = (800, 800)  # You can adjust this size as needed
        img.thumbnail(output_size, Image.LANCZOS)
        buffer = BytesIO()
        img.save(buffer, format='JPEG', quality=85)
        buffer.seek(0)

        # Save the new image to the same field
        new_filename = os.path.splitext(self.image_url.name)[0] + '.jpg'
        self.image_url.save(new_filename, ContentFile(buffer.read()), save=False)

        super().save(*args, **kwargs)
