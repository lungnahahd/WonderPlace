# viewsets : 자주 사용하는 공통적인 view 로직을 그룹화 한 것
from django.shortcuts import render
from rest_framework import viewsets
from .serializers import WonderSerializer
from .models import Wonder
from rest_framework.decorators import api_view
from rest_framework.response import Response
#아래는 연습용 추가 import
import urllib.request
import urllib.parse
from bs4 import BeautifulSoup
import requests
from django.http import HttpResponse

key_value ='b56169eae0274d53943d1431cc14a41a'
detail_value = '&Type=xml&pIndex=1&pSize=100&SIGUN_NM='
search = input('원하는 경기도 시군명을 입력해주세요:)')
final_url = 'https://openapi.gg.go.kr/TourismRestaurant?Key='+ key_value + detail_value + urllib.parse.quote_plus(search)
request = final_url
#@api_view(['GET'])
def store_list(request):
    req = requests.get(final_url)
    html=req.text
    soup = BeautifulSoup(html,'html.parser')
    store_name = soup.find_all("bizplc_nm")
    store_address = soup.find_all("refine_lotno_addr")
    result = ''
    for i in range(len(store_name)):
        result = result + f'<p>{store_name[i]} {store_address[i]}</p>'
    response = urllib.request.urlopen(final_url)
    byte_data = response.read()
    text_data = byte_data.decode('utf-8')
    return HttpResponse(result)



# class WonderViewSet(viewsets.ModelViewSet):
#     queryset = Wonder.objects.all()
#     serializer_class = WonderSerializer