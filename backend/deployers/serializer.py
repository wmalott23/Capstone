from rest_framework import serializers
from .models import Deployer

class DeployerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Deployer
        fields = ['id', 'deployment', 'deployment_id', 'first_name', 'last_name', 'email', 'address', 'phone_number', 'cac_exp', 'pass_num', 'pass_exp', 'visa_name', 'visa_id', 'visa_exp', 'med_requested', 'med_scheduled', 'med_exp', 'dent_scheduled', 'dent_exp', 'loa_exp']
        depth = 1
    deployment_id = serializers.IntegerField(write_only=True)