# Generated by Django 4.0.4 on 2022-05-19 18:10

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('deployments', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='deployment',
            old_name='deployerId',
            new_name='deployer_id',
        ),
        migrations.RenameField(
            model_name='deployment',
            old_name='endDate',
            new_name='end_date',
        ),
        migrations.RenameField(
            model_name='deployment',
            old_name='requirementListId',
            new_name='requirement_list_id',
        ),
        migrations.RenameField(
            model_name='deployment',
            old_name='startDate',
            new_name='start_date',
        ),
    ]