from django.db import models
from deployers.models import Deployer
from requirements_lists.models import RequirementList

# Create your models here.

class Deployment(models.Model):
    name = models.CharField(max_length=30)
    start_date = models.IntegerField()
    end_date = models.IntegerField()
    deployer_id = models.ForeignKey(Deployer, on_delete=models.CASCADE)
    requirement_list_id = models.ForeignKey(RequirementList, on_delete=models.CASCADE)