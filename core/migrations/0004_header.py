# Generated by Django 5.0.6 on 2024-05-27 18:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0003_listingtype_property_listing_types'),
    ]

    operations = [
        migrations.CreateModel(
            name='Header',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=50)),
                ('values', models.CharField(max_length=200)),
                ('url', models.CharField(max_length=200)),
            ],
        ),
    ]