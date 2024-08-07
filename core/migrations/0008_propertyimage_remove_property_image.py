# Generated by Django 5.0.6 on 2024-05-31 11:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0007_alter_leads_mobile'),
    ]

    operations = [
        migrations.CreateModel(
            name='PropertyImage',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('property_id', models.IntegerField(max_length=10)),
                ('image_url', models.URLField(max_length=255)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.RemoveField(
            model_name='property',
            name='image',
        ),
    ]
