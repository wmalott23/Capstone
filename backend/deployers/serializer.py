from rest_framework import serializers
from .models import Deployer

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Deployer,
        fields = ['user', 'email', 'address', 'phone_number', 'cac_exp', 'pass_num', 'pass_exp', 'visa_name', 'visa_id', 'visa_exp', 'cbts', 'med_requested', 'med_scheduled', 'med_exp', 'dent_scheduled', 'dent_exp', 'loa_exp']
        depth = 1