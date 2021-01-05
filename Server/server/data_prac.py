import urllib.request
import urllib.parse
from bs4 import BeautifulSoup
import requests

# 인증키를 입력
key_value ='b56169eae0274d53943d1431cc14a41a'
# 여러 가지 기본 정보들을 입력
detail_value = '&Type=xml&pIndex=1&pSize=100&SIGUN_NM='
# API 중 원하는 정보만을 검색해서 받는 부분
search = input('원하는 경기도 시군명을 입력해주세요:)')
final_url = 'https://openapi.gg.go.kr/TourismRestaurant?Key='+ key_value + detail_value + urllib.parse.quote_plus(search)

# 해당 html을 BeautifulSoup를 이용해서 분석
req = requests.get(final_url)
html = req.text
soup = BeautifulSoup(html,'html.parser')
# Xml 중에서 원하는 정보를 선택해서 받는 부분, 이 부분을 수정해서 원하는 정보를 골라서 받을 수 있음
store_name = soup.find_all("bizplc_nm")

# 정보를 출력해주는 부분
count = 0
for i in store_name:
    print()
    print(i.string)
    print()
    print("================================")
    count = count + 1

if(count == 0):
    print("해당 시군에는 검색 결과가 존재하지 않습니다.")
else:
    print() 
    print("결과 갯수 : " + str(count))
    print("검색이 완료되었습니다.")