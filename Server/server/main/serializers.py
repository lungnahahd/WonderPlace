# # 복잡한 데이터를 다른 유형으로 쉽게 변환 가능(Serializar)
# from rest_framework import generics,serializers
# from rest_framework.response import Response
# from .models import *

# class WonderSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Wonder
#         fields = ('id','title','genre','year')
#         #fields = ( __all__ )도 가능
# class WonderListView(generics.ListAPIView):

