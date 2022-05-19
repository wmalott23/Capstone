from django.db import models
from ..locations.models import Location

# Create your models here.


class DeploymentProgram(models.Model):
    program = models.CharField(max_length=30)
    locationId = models.ForeignKey(Location, on_delete=models.CASCADE)