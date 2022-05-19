from django.db import models
from ..steps.models import Step

# Create your models here.

class Requirement(models.Model):
    name = models.CharField(max_length=30)
    dependency = models.CharField(max_length=30)
    step = models.ForeignKey(Step, on_delete=models.CASCADE)