from django.shortcuts import render, get_object_or_404
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializer import LocationSerializer
from .models import Location

# Create your views here.

@api_view(['GET', 'POST'])
def locations_list(request):
    if request.method == 'GET':
        locations = Location.objects.all()
        serializer = LocationSerializer(locations, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = LocationSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

@api_view(['GET', 'PUT', 'DELETE'])
def locations_detail(request, pk):
    locations = get_object_or_404(Location, pk=pk)
    if request.method == 'GET':
        serializer = LocationSerializer(locations)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = LocationSerializer(locations, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    elif request.method == 'DELETE':
        locations.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)