from django.db import models
from authentication.models import User
from cbts.models import Cbt


# Create your models here.


class Deployer(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    email = models.CharField(max_length=50)
    address = models.CharField(max_length=100)
    phone_number = models.IntegerField()
    cac_exp = models.DateField()
    pass_num= models.CharField(max_length=30)
    pass_exp = models.DateField()
    visa_name = models.CharField(max_length=30)
    visa_id = models.CharField(max_length=30)
    visa_exp = models.DateField()
    cbts = models.ForeignKey(Cbt, on_delete=models.CASCADE)
    med_requested = models.DateField()
    med_scheduled = models.DateField()
    med_exp = models.DateField()
    dent_scheduled = models.DateField()
    dent_exp = models.DateField()
    loa_exp = models.DateField()
