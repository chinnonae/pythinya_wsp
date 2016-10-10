from django.conf.urls import url
from rest_framework.authtoken import views as auth_view

urlpatterns = [
    url(r'^login/', auth_view.obtain_auth_token)
]