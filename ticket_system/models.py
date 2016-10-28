from django.db import models
from django.utils.translation import ugettext_lazy as _

from user.models import User


class Ticket(models.Model):
    min_mmr = models.PositiveIntegerField(_("minimum MMR"))
    max_mmr = models.PositiveIntegerField(_("maximum MMR"))
    booster = models.ForeignKey(User, on_delete=models.CASCADE, related_name='booster')
    client = models.ForeignKey(User, on_delete=models.CASCADE, null=True, related_name='client')
    day_used = models.PositiveIntegerField(_("day used to boost MMR"))
    status = models.IntegerField(choices=(
        (1, _("available")),
        (2, _("boosting")),
        (3, _("waiting for payment")),
        (4, _("done")),
    ))
    current_mmr = models.PositiveIntegerField(_("current MMR"), null=True)

