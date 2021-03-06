# Generated by Django 4.0.4 on 2022-05-19 16:44

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('cbts', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Deployer',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('email', models.CharField(max_length=50)),
                ('address', models.CharField(max_length=100)),
                ('phone_number', models.IntegerField()),
                ('cac_exp', models.IntegerField()),
                ('pass_num', models.CharField(max_length=30)),
                ('pass_exp', models.IntegerField()),
                ('visa_name', models.CharField(max_length=30)),
                ('visa_id', models.CharField(max_length=30)),
                ('visa_exp', models.IntegerField()),
                ('med_requested', models.IntegerField()),
                ('med_scheduled', models.IntegerField()),
                ('med_exp', models.IntegerField()),
                ('dent_scheduled', models.IntegerField()),
                ('dent_exp', models.IntegerField()),
                ('loa_exp', models.IntegerField()),
                ('cbts', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='cbts.cbt')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
