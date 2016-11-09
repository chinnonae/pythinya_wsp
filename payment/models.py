from django.db import models
from django.utils.translation import ugettext_lazy as _

topup_rate_status_choice = (
    (0, _("available")),
    (1, _("unavailable"))
)


class TopupRate(models.Model):
    baht = models.PositiveIntegerField()
    coin = models.PositiveIntegerField()
    status = models.PositiveSmallIntegerField(default=0, choices=topup_rate_status_choice)
