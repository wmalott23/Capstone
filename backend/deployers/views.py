from django.shortcuts import render, get_object_or_404
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework import status
from .serializer import DeployerSerializer
from .models import Deployer

# Create your views here.

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def deployers_list(request):
    deployers = Deployer.objects.all()
    serializer = DeployerSerializer(deployers, many=True)
    return Response(serializer.data)

@api_view(['POST'])
@permission_classes([AllowAny])
def deployers_reg(request):
    serializer = DeployerSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    serializer.save()
    return Response(serializer.data, status=status.HTTP_201_CREATED)

@api_view(['GET', 'PUT', 'DELETE'])
@permission_classes([AllowAny])
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