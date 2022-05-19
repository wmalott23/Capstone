from rest_framework import serializers
from .models import DeploymentProgram

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = DeploymentProgram,
        fields = ['program', 'location_id']
        depth = 1