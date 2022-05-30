from django.shortcuts import render, get_object_or_404
from rest_framework.decorators import api_view
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework import status
from .serializer import StepSerializer
from .models import Step

# Create your views here.

@api_view(['GET'])
def steps_list(request):
    steps = Step.objects.all()
    serializer = StepSerializer(steps, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['POST'])
def steps_post(request):
    serializer = StepSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def steps__list(request, id):
    steps = Step.objects.filter(requirement__requirement_list__deployment__id=id)
    serializer = StepSerializer(steps, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['PUT'])
def steps_update(request, pk):
    step = get_object_or_404(Step, pk=pk)
    serializer = StepSerializer(step, data=request.data)
    if serializer.is_valid():
        serializer.save(user=request.user)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['DELETE'])
def step_delete(request, pk):
    step = get_object_or_404(Step, pk=pk)
    step.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)