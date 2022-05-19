# Generated by Django 4.0.4 on 2022-05-19 16:44

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('deployments', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Location',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=30)),
                ('deploymentId', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='deployments.deployment')),
            ],
        ),
    ]
