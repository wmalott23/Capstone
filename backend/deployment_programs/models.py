from django.db import models

# Create your models here.


class DeploymentProgram(models.Model):
    program = models.CharField(max_length=30)
    locationID = models.ForeignKey