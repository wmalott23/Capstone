from rest_framework import serializers
from .models import Cbt

class CbtSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cbt,
        fields = ['name', 'exp']