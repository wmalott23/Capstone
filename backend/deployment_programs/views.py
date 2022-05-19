from django.shortcuts import render, get_object_or_404
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializer import DeploymentProgramSerializer
from .models import DeploymentProgram

# Create your views here.

@api_view(['GET', 'POST'])
def deployment_programs_list(request):
    if request.method == 'GET':
        deployment_programs = DeploymentProgram.objects.all()
        serializer = DeploymentProgramSerializer(deployment_programs, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = DeploymentProgramSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

@api_view(['GET', 'PUT', 'DELETE'])
def deployment_programs_detail(request, pk):
    deployment_program = get_object_or_404(DeploymentProgram, pk=pk)
    if request.method == 'GET':
        serializer = DeploymentProgramSerializer(deployment_program)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = DeploymentProgramSerializer(deployment_program, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    elif request.method == 'DELETE':
        deployment_program.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)