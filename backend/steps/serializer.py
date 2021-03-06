from rest_framework import serializers
from .models import Step

class StepSerializer(serializers.ModelSerializer):
    class Meta:
        model = Step
        fields = ['id', 'name', 'requirement', 'requirement_id', 'description', 'priority', 'len']
        depth = 2
    requirement_id = serializers.IntegerField(write_only=True)