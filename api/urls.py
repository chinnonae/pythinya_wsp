from django.conf.urls import url, include

from rest_framework.authtoken import views as auth_view

from . import views

user_url = [
    url(r'^signin/$', auth_view.obtain_auth_token),
    url(r'^signup/$', views.Register.as_view()),
    url(r'^(?P<pk>[0-9]+/)|()profile/$', views.UserView.as_view()),
    url(r'^profile/interested-ticket', views.UserInterestedTicketView.as_view()),
    url(r'^register-booster$', views.BoosterRegister.as_view()),
]

ticket_url = [
    url(r'^$', views.TicketView.as_view()),
    url(r'^history$', views.TicketHistoryView.as_view()),
    url(r'^(?P<pk>[0-9]+)$', views.TicketDetailView.as_view()),
    url(r'^(?P<pk>[0-9]+)/buy$', views.TicketPurchaseView.as_view()),
    url(r'^(?P<pk>[0-9]+)/progress$', views.TicketProgressView.as_view()),
    url(r'^(?P<pk>[0-9]+)/cancel$', views.TicketCancelView.as_view()),
    url(r'^(?P<pk>[0-9]+)/remove$', views.TicketRemoveView.as_view()),
    url(r'^(?P<pk>[0-9]+)/complete$', views.TicketCompleteView.as_view()),
    url(r'^(?P<pk>[0-9]+)/pick$', views.TicketPickView.as_view()),
    url(r'^(?P<pk>[0-9]+)/choose-client/(?P<client_id>[0-9]+)$', views.ChooseClientView.as_view())
]

payment_url = [
    url(r'^$', views.TopupListView.as_view()),
    url(r'^(?P<pk>[0-9]+)$', views.TopupView.as_view()),
]

admin_url = [
    url(r'^list/pending-booster$', views.PendingBoosterList.as_view()),
    url(r'^list/booster$', views.BoosterWithTicketServiceDetail.as_view()),
    url(r'^list/client$', views.ClientWithTicketServiceDetail.as_view()),
    url(r'^booster/(?P<pk>[0-9]+)/approve', views.BoosterApproval.as_view()),
    url(r'^booster/(?P<pk>[0-9]+)/deny', views.BoosterDenial.as_view()),
    url(r'^clear-users$', views.ClearUserView.as_view())
]

urlpatterns = [
    url(r'^user/', include(user_url)),
    url(r'^ticket/', include(ticket_url)),
    url(r'^topup/', include(payment_url)),
    url(r'^admin/', include(admin_url)),
    url(r'^payment/', views.PaypalCreditCard.as_view()),
]
