# Generated by Django 4.0.4 on 2022-05-20 16:40

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('locations', '0002_rename_deploymentid_location_deployment_id'),
    ]

    operations = [
        migrations.RenameField(
            model_name='location',
            old_name='deployment_id',
            new_name='deployment',
        ),
    ]
