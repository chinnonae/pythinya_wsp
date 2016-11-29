from paypal.standard.models import ST_PP_COMPLETED
from paypal.standard.ipn.signals import valid_ipn_received


def on_paypal_money_received(sender, **kwargs):
    ipn_obj = sender
    print(ipn_obj)

valid_ipn_received.connect(on_paypal_money_received)
