# Generated by Django 5.0.6 on 2024-07-01 18:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0017_property_thumbnail'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='property',
            name='url',
        ),
        migrations.AlterField(
            model_name='property',
            name='community_image_url',
            field=models.ImageField(blank=True, upload_to='property_images/'),
        ),
    ]
