from django.contrib import admin
from django.urls import path
from django.conf.urls import url, include
from rest_framework import routers
#from main.views import WonderViewSet

#router = routers.DefaultRouter()
#  router.register('main',WonderViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    #url(r'^admin/', admin.site.urls),
    # url(r'^',include(router.urls)),
    path('TourismRestaurant/', include('main.urls')),
    path('', include('main.urls'))
    #path('main/', include('main.urls'))
]
