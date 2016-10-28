from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^$', views.TicketView.as_view()),
    url(r'^(?P<pk>[0-9]+)$', views.TicketDetailView.as_view()),
    url(r'^(?P<pk>[0-9]+)/buy$', views.TicketPurchaseView.as_view()),
    url(r'^(?P<pk>[0-9]+)/reserve$', views.TicketReserveView.as_view()),
    url(r'^(?P<pk>[0-9]+)/progress$', views.TicketProgressView.as_view()),
    url(r'^(?P<pk>[0-9]+)/cancel', views.TicketCancelView.as_view())
]