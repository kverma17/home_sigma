# Generated by Django 5.0.6 on 2024-06-08 05:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0010_remove_leads_generated_by_leads_interests_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='property',
            name='created_by',
            field=models.CharField(max_length=32),
        ),
        migrations.AlterField(
            model_name='property',
            name='updated_by',
            field=models.CharField(max_length=32),
        ),
    ]
