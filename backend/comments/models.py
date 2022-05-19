from django.db import models
from authentication.models import User
from steps.models import Step

# Create your models here.

class Comment(models.Model):
    stepId = models.ForeignKey(Step, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    commentMessage = models.CharField(max_length=255)