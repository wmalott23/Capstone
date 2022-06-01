from rest_framework import serializers
from .models import Deployment

class DeploymentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Deployment
        fields = ['id', 'name', 'start_date', 'end_date', 'requirement_list', 'requirement_list_id', 'location', 'location_id']
        depth = 1
    requirement_list_id = serializers.IntegerField(write_only=True)
    location_id = serializers.IntegerField(write_only=True)