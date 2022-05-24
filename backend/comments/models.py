from django.db import models
from authentication.models import User

# Create your models here.

class Comment(models.Model):
    step_id = models.CharField(max_length=255)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    comment_message = models.CharField(max_length=255)