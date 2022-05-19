from django.shortcuts import render, get_object_or_404
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializer import StepSerializer
from .models import Step

# Create your views here.

@api_view(['GET', 'POST'])
def steps_list(request):
    if request.method == 'GET':
        steps = Step.objects.all()
        serializer = StepSerializer(steps, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = StepSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

@api_view(['GET', 'PUT', 'DELETE'])
def steps_detail(request, pk):
    step = get_object_or_404(Step, pk=pk)
    if request.method == 'GET':
        serializer = StepSerializer(step)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = StepSerializer(step, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    elif request.method == 'DELETE':
        step.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)