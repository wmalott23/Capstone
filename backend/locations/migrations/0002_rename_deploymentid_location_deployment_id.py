# Generated by Django 4.0.4 on 2022-05-19 18:10

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('locations', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='location',
            old_name='deploymentId',
            new_name='deployment_id',
        ),
    ]
