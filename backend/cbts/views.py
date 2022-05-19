from django.shortcuts import render, get_object_or_404
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializer import CbtSerializer
from .models import Cbt

# Create your views here.

@api_view(['GET', 'POST'])
def cbts_list(request):
    if request.method == 'GET':
        cbts = Cbt.objects.all()
        serializer = CbtSerializer(cbts, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = CbtSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

@api_view(['GET', 'PUT', 'DELETE'])
def cbts_detail(request, pk):
    cbt = get_object_or_404(Cbt, pk=pk)
    if request.method == 'GET':
        serializer = CbtSerializer(cbt)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = CbtSerializer(cbt, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    elif request.method == 'DELETE':
        cbt.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    