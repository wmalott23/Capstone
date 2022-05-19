from django.db import models
from deployers.models import Deployer
from requirements_lists.models import RequirementList

# Create your models here.

class Deployment(models.Model):
    name = models.CharField(max_length=30)
    startDate = models.IntegerField()
    endDate = models.IntegerField()
    deployerId = models.ForeignKey(Deployer, on_delete=models.CASCADE)
    requirementListId = models.ForeignKey(RequirementList, on_delete=models.CASCADE)