from django.db import models
from django.utils.translation import ugettext_lazy as _

from user.models import User

class Ticket(models):
    min_mmr = models.PositiveIntegerField(_("minimum MMR"))
    max_mmr = models.PositiveIntegerField(_("maximum MMR"))
    booster = models.ForeignKey(User, on_delete=models.CASCADE)
    client = models.ForeignKey(User, on_delete=models.CASCADE)
    day_use = models.PositiveIntegerField()
    status = models.CharField(choices=(
                                    _("available"),
                                    _("boosting"),
                                    _("waiting for payment"),
                                    _("done"),
                                ))
