from django.db import models
from deployers.models import Deployer

# Create your models here.

class Cbt(models.Model):
    deployer = models.ForeignKey(Deployer, on_delete=models.CASCADE)
    name = models.CharField(max_length=50)
    exp = models.DateField()