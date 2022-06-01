from rest_framework import serializers
from .models import RequirementList

class RequirementListSerializer(serializers.ModelSerializer):
    class Meta:
        model = RequirementList
        fields = ['id', 'name']