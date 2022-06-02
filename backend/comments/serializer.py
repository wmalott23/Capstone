from rest_framework import serializers
from .models import Comm

class CommSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comm
        fields = ['id', 'user', 'comment_message', 'step', 'step_id']
        depth = 1
    step_id = serializers.IntegerField(write_only=True)