from rest_framework import serializers
from .models import Cbt

class CbtSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cbt
        fields = ['id', 'deployer', 'deployer_id', 'name', 'exp']
        depth = 1
    deployer_id = serializers.IntegerField(write_only=True)
        