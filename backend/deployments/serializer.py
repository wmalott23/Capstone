from rest_framework import serializers
from .models import Deployment

class DeploymentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Deployment
        fields = ['id', 'name', 'start_date', 'end_date', 'deployer_id', 'requirement_list_id']
        depth = 1