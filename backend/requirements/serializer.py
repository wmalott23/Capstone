from rest_framework import serializers
from .models import Requirement

class RequirementSerializer(serializers.ModelSerializer):
    class Meta:
        model = Requirement
        fields = ['id', 'name', 'priority', 'requirement_list', 'requirement_list_id']
        depth = 1

    requirement_list_id = serializers.IntegerField(write_only=True)