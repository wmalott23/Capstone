from rest_framework import serializers
from .models import Deployment

class DeploymentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Deployment
        fields = ['id', 'name', 'start_date', 'end_date', 'deployer', 'deployer_id', 'requirement_list', 'requirement_list_id']
        depth = 1
    deployer_id = serializers.IntegerField(write_only=True)
    requirement_list_id = serializers.IntegerField(write_only=True)