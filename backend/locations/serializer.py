from re import L
from rest_framework import serializers
from .models import Location

class LocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Location
        fields = ['id', 'name', 'deployment', 'deployment_id']
        depth = 4
    deployment_id = serializers.IntegerField(write_only=True)