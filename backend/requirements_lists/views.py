from django.shortcuts import render, get_object_or_404
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializer import RequirementListSerializer
from .models import RequirementList

# Create your views here.

@api_view(['GET', 'POST'])
def requirement_lists_list(request):
    if request.method == 'GET':
        requirement_lists = RequirementList.objects.all()
        serializer = RequirementListSerializer(requirement_lists, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = RequirementListSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

@api_view(['GET', 'PUT', 'DELETE'])
def requirement_lists_detail(request, pk):
    requirement_list = get_object_or_404(RequirementList, pk=pk)
    if request.method == 'GET':
        serializer = RequirementListSerializer(requirement_list)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = RequirementListSerializer(requirement_list, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    elif request.method == 'DELETE':
        requirement_list.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)