from django.db import models
from requirements_lists.models import RequirementList

# Create your models here.

class Requirement(models.Model):
    name = models.CharField(max_length=30)
    priority = models.CharField(max_length=30)
    requirement_list = models.ForeignKey(RequirementList, on_delete=models.CASCADE)