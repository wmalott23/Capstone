# Generated by Django 4.0.4 on 2022-05-24 18:32

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('deployers', '0006_remove_deployer_cbts_deployer_deployment'),
        ('cbts', '0002_alter_cbt_exp'),
    ]

    operations = [
        migrations.AddField(
            model_name='cbt',
            name='deployer',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='deployers.deployer'),
            preserve_default=False,
        ),
    ]
