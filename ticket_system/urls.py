from django.conf.urls import url

from . import views

urlpattern = [
    url(r'^/&', views.TicketView.as_view()),
    url(r'^/(?P<pk>[0-9]+)&', views.TicketDetailView.as_view()),
    url(r'^/(?P<pk>[0-9]+)/buy&', views.TicketPurchaseView.as_view()),
    url(r'^/(?P<pk>[0-9]+)/progress&', views.TicketProgressView.as_view())
]