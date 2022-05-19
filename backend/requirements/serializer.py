from rest_framework import serializers
from .models import Requirement

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Requirement,
        fields = ['id', 'name', 'dependency', 'step']
        depth = 1