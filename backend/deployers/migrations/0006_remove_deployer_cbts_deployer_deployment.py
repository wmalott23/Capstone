# Generated by Django 4.0.4 on 2022-05-24 18:32

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('deployments', '0005_remove_deployment_deployer_and_more'),
        ('deployers', '0005_alter_deployer_cbts_alter_deployer_phone_number'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='deployer',
            name='cbts',
        ),
        migrations.AddField(
            model_name='deployer',
            name='deployment',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='deployments.deployment'),
            preserve_default=False,
        ),
    ]
