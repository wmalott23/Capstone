from rest_framework import serializers
from .models import RequirementList

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = RequirementList,
        fields = ['id', 'name', 'requirement_id']
        depth = 1