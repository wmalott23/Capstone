from rest_framework import serializers
from .models import DeploymentProgram

class DeploymentProgramSerializer(serializers.ModelSerializer):
    class Meta:
        model = DeploymentProgram,
        fields = ['id', 'program', 'location_id']
        depth = 1