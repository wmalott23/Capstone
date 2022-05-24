from rest_framework import serializers
from .models import Cbt

class CbtSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cbt
        fields = ['id', 'name', 'deployer', 'deployer_id']
        depth = 1
    requirement_id = serializers.IntegerField(write_only=True)
        