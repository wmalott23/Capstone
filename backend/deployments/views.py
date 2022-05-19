from django.shortcuts import render, get_object_or_404
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializer import DeploymentSerializer
from .models import Deployment

# Create your views here.

@api_view(['GET', 'POST'])
def deployments_list(request):
    if request.method == 'GET':
        deployments = Deployment.objects.all()
        serializer = DeploymentSerializer(deployments, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = DeploymentSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

@api_view(['GET', 'PUT', 'DELETE'])
def deployments_detail(request, pk):
    deployment = get_object_or_404(Deployment, pk=pk)
    if request.method == 'GET':
        serializer = DeploymentSerializer(deployment)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = DeploymentSerializer(deployment, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    elif request.method == 'DELETE':
        deployment.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)