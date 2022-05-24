from django.shortcuts import render, get_object_or_404, get_list_or_404
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework import status

from .serializer import Comment, CommentSerializer
from .models import Comment

# Create your views here.

@api_view(['GET'])
@permission_classes([AllowAny])
def comments_list(request, id):
    comments = Comment.objects.filter(step_id=id)
    serializer = CommentSerializer(comments, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def comments_post(request):
    serializer = CommentSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save(user=request.user)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def comments_update(request, pk):
    comment = get_object_or_404(Comment, pk=pk)
    serializer = CommentSerializer(comment, data=request.data)
    if serializer.is_valid():
        serializer.save(user=request.user)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)