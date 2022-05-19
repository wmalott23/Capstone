from rest_framework import serializers
from .models import DeploymentProgram

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = DeploymentProgram,
        fields = ['program', 'locationId']
        depth = 1