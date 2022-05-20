from django.db import models
from deployments.models import Deployment

# Create your models here.

class Location(models.Model):
    name = models.CharField(max_length=30)
    deployment = models.ForeignKey(Deployment, on_delete=models.CASCADE)