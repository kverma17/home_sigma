# Generated by Django 5.0.6 on 2024-07-02 18:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0018_remove_property_url_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='property',
            name='url',
            field=models.CharField(default='my-property', max_length=50),
            preserve_default=False,
        ),
    ]
