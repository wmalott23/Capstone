# Generated by Django 4.0.4 on 2022-05-20 16:34

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('deployments', '0003_alter_deployment_end_date_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='deployment',
            old_name='deployer_id',
            new_name='deployer',
        ),
        migrations.RenameField(
            model_name='deployment',
            old_name='requirement_list_id',
            new_name='requirement_list',
        ),
    ]