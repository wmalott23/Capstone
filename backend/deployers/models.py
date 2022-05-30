from django.db import models
from deployments.models import Deployment


# Create your models here.


class Deployer(models.Model):
    deployment = models.ForeignKey(Deployment, on_delete=models.CASCADE)
    first_name = models.CharField(max_length=50, default="fname")
    last_name = models.CharField(max_length=50, default="fname")
    email = models.CharField(max_length=50, null=True)
    address = models.CharField(max_length=100, null=True)
    phone_number = models.CharField(max_length=15, null=True)
    cac_exp = models.DateField(null=True)
    pass_num= models.CharField(max_length=30, null=True)
    pass_exp = models.DateField(null=True)
    visa_name = models.CharField(max_length=30, null=True)
    visa_id = models.CharField(max_length=30, null=True)
    visa_exp = models.DateField(null=True)
    med_requested = models.DateField(null=True)
    med_scheduled = models.DateField(null=True)
    med_exp = models.DateField(null=True)
    dent_scheduled = models.DateField(null=True)
    dent_exp = models.DateField(null=True)
    loa_exp = models.DateField(null=True)
