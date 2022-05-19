from django.db import models
from authentication.models import User
from ..cbts.models import Cbt


# Create your models here.


class Deployer(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    email = models.CharField(max_length=50)
    address = models.CharField(max_length=100)
    phone_number = models.IntegerField()
    cac_exp = models.IntegerField()
    pass_num= models.CharField(max_length=30)
    pass_exp = models.IntegerField()
    visa_name = models.CharField(max_length=30)
    visa_id = models.CharField(max_length=30)
    visa_exp = models.IntegerField()
    cbts = models.ForeignKey(Cbt, on_delete=models.CASCADE)
    med_requested = models.IntegerField()
    med_scheduled = models.IntegerField()
    med_exp = models.IntegerField()
    dent_scheduled = models.IntegerField()
    dent_exp = models.IntegerField()
    loa_exp = models.IntegerField()
