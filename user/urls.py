from django.conf.urls import url

from rest_framework.authtoken import views as auth_view

from . import views

urlpatterns = [
    url(r'^signin/$', auth_view.obtain_auth_token),
    url(r'^signup/$', views.Register.as_view()),
    url(r'^(?P<pk>[0-9]+/)|()profile/$', views.UserView.as_view())
]