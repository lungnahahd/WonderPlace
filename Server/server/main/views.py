
# viewsets : 자주 사용하는 공통적인 view 로직을 그룹화 한 것
from django.shortcuts import render
from rest_framework import viewsets
from .models import Wonder
from rest_framework.decorators import api_view
from rest_framework.response import Response
# 아래는 연습용 추가 import
import urllib.request
import urllib.parse
#from bs4 import BeautifulSoup
from django.http import HttpResponse
import requests
#추가
import simplejson
import json
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from django.template.defaulttags import register



def search_keyword(request):

    if request.method == "GET":
        return 
    elif request.method == "POST":
        query = request.POST.get('query')  # 검색어
        url = 'https://dapi.kakao.com/v2/local/search/keyword.json?query={}'.format(
            query)
        headers = {
            "Authorization": "KakaoAK 13f796a480ad63c4e169282f09c34c7f"
        }
        place = requests.get(url, headers=headers).json()['documents']
        return HttpResponse(place)
#localhost:3000/KaKao/Front/category or localhost:8000/Kakao/Front/category
@method_decorator(csrf_exempt,name='dispatch')
def search_category(request):
    if request.method == "GET":
        return render(request, 'main/a.html')
    elif request.method == "POST":
          print("통신확인용 Print")
          req = json.loads(request.body.decode('utf-8'))
          x = req['x']['x']
          print(x)
          y = req['y']['y']
          radius = req['radius']['radius']  # 지름
          category = req['category']['category']  # 카테고리

          url = f'https://dapi.kakao.com/v2/local/search/category.json?category_group_code={category}&x={x}&y={y}&radius={radius}'
          #url ='https://dapi.kakao.com/v2/local/search/category.json?category={}'.format(category)
          headers = {
               "Authorization": "KakaoAK 13f796a480ad63c4e169282f09c34c7f"
          }
          place = requests.get(url, headers=headers).json()
          return HttpResponse(simplejson.dumps({"place":place}))
@register.filter
def get_item(dictionary,key):
    return dictionary.get(key)



# 이전에 로그인을 해서 거기서 redirect_url에서 code를 request로 보내줌
# 
# refresh token 만료시에 동작 함수 구현하기
#
#localhost:3000/KaKao/Front/friendlist or localhost:8000/Kakao/Front/friendlist
@method_decorator(csrf_exempt,name='dispatch')
def friend_list(request):
    if request.method == "GET":
        code= request.GET.get('code')
        # client_id = "13f796a480ad63c4e169282f09c34c7f"
        url = 'https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=13f796a480ad63c4e169282f09c34c7f&redirect_uri=https://localhost.com&code={}'.format(code)
        # url = 'https://dapi.kakao.com/v2/local/search/keyword.json?query={}'.format(
        #     query)


        #url = "https://kauth.kakao.com/oauth/token"
        data = {
            "grant_type" : "authorization_code",
            "client_id" : "13f796a480ad63c4e169282f09c34c7f",
            "redirect_uri" : "https://localhost.com",
            "code"         : code
        }
        print("a")
        response = requests.get(url).json()
        access_token = response.get('access_token')
        print(access_token)
        friend_url = "https://kapi.kakao.com/v1/api/talk/friends"
        final = f'Bearer {access_token}'
        print(final)
        headers ={
            "Authorization" : final
        }
        freinds_response = requests.get(friend_url,headers=headers).json()
        print("f")
        friend = freinds_response.get('msg')
        print("c")
        print(friend)
        #friend = requests.get(friend_url,headers=headers).json()['documents']
        
        return HttpResponse(friend)
        
    elif request.method =="POST":
        #req = json.load(request.body.decode('utf-8'))
        code = request.POST.get('code')
        print(code)
        print('b')
        #code = req['code']
        #code = request.POST['code']
        #query = request.POST.get('query')
        print('a')
        #code.encoding = 'utf-8'
        print(code)
        url = "https://kauth.kakao.com/oauth/token"
        data = {
            "grant_type" : "authorization_code",
                    "client_id" : "13f796a480ad63c4e169282f09c34c7f",
                    "redirect_uri" : "http://localhost.com",
                    "code"         : code
        }
        response = requests.post(url,data=data)
        access_token = response.json().POST.get('access_token')
        print(access_token)
        print("b")
        friend_url = "https://kapi.kakao.com/v1/api/talk/friends"
        print("c")
        final = f'Authorization: Bearer {access_token}'
        print(final)
        headers ={
            final
        }
        
        friend = requests.get(friend_url,headers=headers).json()['documents']
        
        print("c")
        print(friend)
        return HttpResponse(friend)


#친구목록 초기 Ver

# @method_decorator(csrf_exempt,name='dispatch')
# def friend_list(request):
#     if request.method == "GET":
#         return render(request, 'main/a.html')
#     elif request.method == "POST":
#         code = request.POST.get('code')
        
#         with open("kakao_token.json", "r") as fp:
#             loaddata = json.load(fp)
#             atokens = loaddata["access_token"]
#             rtokens = loaddata["refresh_token"]
#         if atokens == null:
#             url = "https://kauth.kakao.com/oauth/token"
#             data = {
#                     "grant_type" : "authorization_code",
#                     "client_id" : "13f796a480ad63c4e169282f09c34c7f",
#                     "redirect_uri" : "http://localhost:3000/map",
#                     "code"         : code
#             }
#             response = requests.post(url,data=data)
#             atokens = response.json().POST.get('access_token')
#             rtokens = response.json().POST.get('refresh_token')
#             total_tokens = dict()
#             total_tokens["access_token"] = atokens
#             total_tokens["refresh_token"] = rtokens
#             with open("kakao_token.json","w") as fp:
#                 json.dump(total_tokens,fp, indent="\t")
#         else:
#             url = "https://kauth.kakao.com/oauth/token"
#             data={
#                 "grant_type" : "refresh_token",
#                 "client_id" : "13f796a480ad63c4e169282f09c34c7f",
#                 "refresh_token" : rtokens
#             }
#             response = requests.post(url,data=data)
#             atokens = response.json().POST.get('access_token')
#         final_url = "https://kapi.kakao.com/v1/api/talk/friends"
#         headers ={
#             "Authorization":"Bearer " + atokens
#         }
#         friend = requests.get(url,headers=headers).json()['documents']
#         return HttpResponse(freind)

        
