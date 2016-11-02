from django.conf.urls import url, include

from rest_framework.authtoken import views as auth_view

from . import views

user_url = [
    url(r'^signin/$', auth_view.obtain_auth_token),
    url(r'^signup/$', views.Register.as_view()),
    url(r'^(?P<pk>[0-9]+/)|()profile/$', views.UserView.as_view())
]

ticket_url = [
    url(r'^$', views.TicketView.as_view()),
    url(r'^(?P<pk>[0-9]+)$', views.TicketDetailView.as_view()),
    url(r'^(?P<pk>[0-9]+)/buy$', views.TicketPurchaseView.as_view()),
    url(r'^(?P<pk>[0-9]+)/progress$', views.TicketProgressView.as_view()),
    url(r'^(?P<pk>[0-9]+)/cancel$', views.TicketCancelView.as_view()),
    url(r'^(?P<pk>[0-9]+)/complete$', views.TicketCompleteView.as_view()),
    url(r'^(?P<pk>[0-9]+)/pick$', views.TicketPickView.as_view()),
    url(r'^(?P<pk>[0-9]+)/choose-client/(?P<client_id>[0-9]+)$', views.ChooseClientView.as_view())
]

urlpatterns = [
    url(r'^user/', include(user_url)),
    url(r'^ticket/', include(ticket_url))
]