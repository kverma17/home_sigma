# Generated by Django 5.0.6 on 2024-05-31 10:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0005_leads_property_attractions_property_created_at_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='leadhistory',
            name='lead_id',
            field=models.IntegerField(),
        ),
    ]