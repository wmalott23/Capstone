from django.db import models
from requirements.models import Requirement

# Create your models here.

class Step(models.Model):
    name = models.CharField(max_length=30)
    requirement_id = models.ForeignKey(Requirement, on_delete=models.CASCADE)
    description = models.CharField(max_length=255)
    length = models.IntegerField()