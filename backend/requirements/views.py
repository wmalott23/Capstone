from django.shortcuts import render, get_object_or_404
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializer import RequirementSerializer
from .models import Requirement

# Create your views here.

@api_view(['GET', 'POST'])
def requirements_list(request):
    if request.method == 'GET':
        requirements = Requirement.objects.all()
        serializer = RequirementSerializer(requirements, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = RequirementSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

@api_view(['GET', 'PUT', 'DELETE'])
def requirements_detail(request, pk):
    requirement = get_object_or_404(Requirement, pk=pk)
    if request.method == 'GET':
        serializer = RequirementSerializer(requirement)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = RequirementSerializer(requirement, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    elif request.method == 'DELETE':
        requirement.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)