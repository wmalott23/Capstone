from rest_framework import serializers
from .models import DepNotes

class DepNotesSerializer(serializers.ModelSerializer):
    class Meta:
        model = DepNotes
        fields = ['id', 'user', 'comment_message', 'step', 'step_id']
        depth = 1
    step_id = serializers.IntegerField(write_only=True)