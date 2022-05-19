from django.db import models

# Create your models here.

class Step(models.Model):
    name = models.CharField(max_length=30)
    description = models.CharField(max_length=255)
    length = models.IntegerField()