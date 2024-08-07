# Generated by Django 5.0.6 on 2024-06-09 14:00

import django.utils.timezone
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0003_header_listingtype_property_listing_types'),
    ]

    operations = [
        migrations.CreateModel(
            name='LeadHistory',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('lead_id', models.IntegerField()),
                ('comments', models.TextField()),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
        ),
        migrations.CreateModel(
            name='Leads',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=30)),
                ('mobile', models.CharField(blank=True, max_length=12)),
                ('email', models.EmailField(blank=True, max_length=254)),
                ('interests', models.CharField(blank=True, max_length=30)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='PropertyImage',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('property_id', models.IntegerField()),
                ('image_url', models.URLField(max_length=255)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.AddField(
            model_name='property',
            name='attractions',
            field=models.CharField(blank=True, max_length=255),
        ),
        migrations.AddField(
            model_name='property',
            name='created_at',
            field=models.DateTimeField(auto_now_add=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='property',
            name='created_by',
            field=models.CharField(default=django.utils.timezone.now, max_length=32),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='property',
            name='updated_at',
            field=models.DateTimeField(auto_now=True),
        ),
        migrations.AddField(
            model_name='property',
            name='updated_by',
            field=models.CharField(default=django.utils.timezone.now, max_length=32),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='property',
            name='url',
            field=models.CharField(default=django.utils.timezone.now, max_length=50),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='listingtype',
            name='id',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='property',
            name='name',
            field=models.CharField(max_length=50),
        ),
    ]
