# Generated by Django 5.0.6 on 2024-06-15 11:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0014_alter_leads_interests'),
    ]

    operations = [
        migrations.AddField(
            model_name='leads',
            name='generated_by',
            field=models.CharField(blank=True, max_length=30),
        ),
        migrations.AddField(
            model_name='leads',
            name='landing_link',
            field=models.CharField(blank=True, max_length=100),
        ),
    ]
