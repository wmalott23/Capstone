from django.db import models
from requirements.models import Requirement

# Create your models here.

class RequirementList(models.Model):
    name = models.CharField(max_length=30)
    requirementId = models.ForeignKey(Requirement, on_delete=models.CASCADE)