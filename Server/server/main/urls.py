# 앱 내에 생성된 url.py
from django.urls import path
from . import views

urlpatterns=[
    path('main/',views.store_list)
]