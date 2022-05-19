from re import L
from rest_framework import serializers
from .models import Location

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Location,
        fields = ['id', 'name', 'deployment_id']
        depth = 1