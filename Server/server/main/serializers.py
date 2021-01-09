# 복잡한 데이터를 다른 유형으로 쉽게 변환 가능(Serializar)
from rest_framework import serializers
from .models import Wonder

class WonderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Wonder
        fields = ['id','store_name','store_place']