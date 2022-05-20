from rest_framework import serializers
from .models import RequirementList

class RequirementListSerializer(serializers.ModelSerializer):
    class Meta:
        model = RequirementList
        fields = ['id', 'name', 'requirement', 'requirement_id']
        depth = 1
    requirement_id = serializers.IntegerField(write_only=True)