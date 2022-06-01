from django.db import models
from locations.models import Location
from requirements_lists.models import RequirementList

# Create your models here.

class Deployment(models.Model):
    name = models.CharField(max_length=30)
    start_date = models.DateField()
    end_date = models.DateField()
    requirement_list = models.ForeignKey(RequirementList, on_delete=models.CASCADE)
    location = models.ForeignKey(Location, on_delete=models.CASCADE)