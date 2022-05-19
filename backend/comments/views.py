from django.shortcuts import render, get_object_or_404
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from .serializer import Comment
from .models import Comment

# Create your views here.

@api_view(['GET', 'POST'])
def comments_list(request):
    if request.method == 'GET':
        comments = Comment.objects.all()
        serializer = Comment(comments, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = Comment(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

@api_view(['GET', 'PUT', 'DELETE'])
def comments_detail(request, pk):
    comment = get_object_or_404(Comment, pk=pk)
    if request.method == 'GET':
        serializer = Comment(comment)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = Comment(comment, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    elif request.method == 'DELETE':
        comment.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)