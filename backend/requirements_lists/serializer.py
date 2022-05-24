from rest_framework import serializers
from .models import RequirementList

class RequirementListSerializer(serializers.ModelSerializer):
    class Meta:
        model = RequirementList
        fields = ['id', 'name', 'deployment', 'deployment_id']
        depth = 1
    deployment_id = serializers.IntegerField(write_only=True)