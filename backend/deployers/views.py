from django.shortcuts import render, get_object_or_404
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializer import DeployerSerializer
from .models import Deployer

# Create your views here.

@api_view(['GET', 'POST'])
def deployers_list(request):
    if request.method == 'GET':
        deployers = Deployer.objects.all()
        serializer = DeployerSerializer(deployers, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = DeployerSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

@api_view(['GET', 'PUT', 'DELETE'])
def deployers_detail(request, pk):
    deployer = get_object_or_404(Deployer, pk=pk)
    if request.method == 'GET':
        serializer = DeployerSerializer(deployer)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = DeployerSerializer(deployer, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    elif request.method == 'DELETE':
        deployer.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)