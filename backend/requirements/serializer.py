from rest_framework import serializers
from .models import Requirement

class RequirementSerializer(serializers.ModelSerializer):
    class Meta:
        model = Requirement
        fields = ['id', 'name', 'dependency', 'step', 'step_id']
        depth = 1

    step_id = serializers.IntegerField(write_only=True)