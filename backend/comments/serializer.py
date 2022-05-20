from rest_framework import serializers
from .models import Comment

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ['id', 'step', 'step_id', 'user', 'comment_message']
        depth = 1

    step_id = serializers.IntegerField(write_only=True)