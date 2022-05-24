from rest_framework import serializers
from .models import Deployment

class DeploymentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Deployment
        fields = ['id', 'name', 'start_date', 'end_date', 'location', 'location_id']
        depth = 1
    location_id = serializers.IntegerField(write_only=True)