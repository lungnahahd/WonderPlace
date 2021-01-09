# viewsets : 자주 사용하는 공통적인 view 로직을 그룹화 한 것
from django.shortcuts import render
from rest_framework import viewsets
from .serializers import WonderSerializer
from .models import Wonder
from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['GET'])
def store_list(request):
    stores = Wonder.objects.all()
    serializer = WonderSerializer(stores,many=True)
    return Response(serializer._data)




# class WonderViewSet(viewsets.ModelViewSet):
#     queryset = Wonder.objects.all()
#     serializer_class = WonderSerializer