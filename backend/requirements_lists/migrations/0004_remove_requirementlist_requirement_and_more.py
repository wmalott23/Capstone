# Generated by Django 4.0.4 on 2022-05-24 18:32

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('deployments', '0005_remove_deployment_deployer_and_more'),
        ('requirements_lists', '0003_rename_requirement_id_requirementlist_requirement'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='requirementlist',
            name='requirement',
        ),
        migrations.AddField(
            model_name='requirementlist',
            name='deployment',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='deployments.deployment'),
            preserve_default=False,
        ),
    ]
