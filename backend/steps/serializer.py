from rest_framework import serializers
from .models import Step

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Step,
        fields = ['id', 'name', 'description', 'length']
        depth = 1