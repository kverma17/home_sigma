# Generated by Django 5.0.6 on 2024-06-08 05:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0009_alter_propertyimage_property_id'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='leads',
            name='generated_by',
        ),
        migrations.AddField(
            model_name='leads',
            name='interests',
            field=models.CharField(blank=True, max_length=30),
        ),
        migrations.AddField(
            model_name='property',
            name='url',
            field=models.CharField(default='/property/dubai', max_length=50),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='leads',
            name='email',
            field=models.EmailField(blank=True, max_length=254),
        ),
        migrations.AlterField(
            model_name='leads',
            name='mobile',
            field=models.CharField(blank=True, max_length=12),
        ),
        migrations.AlterField(
            model_name='property',
            name='name',
            field=models.CharField(max_length=50),
        ),
    ]