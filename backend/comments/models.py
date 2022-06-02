from django.db import models
from authentication.models import User
from steps.models import Step

# Create your models here.

class Comm(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    comment_message = models.CharField(max_length=255)
    step = models.ForeignKey(Step, on_delete=models.CASCADE)