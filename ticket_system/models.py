from django.db import models
from django.utils.translation import ugettext_lazy as _

from user.models import User


class Ticket(models.Model):
    min_mmr = models.PositiveIntegerField(_("minimum MMR"))
    max_mmr = models.PositiveIntegerField(_("maximum MMR"))
    booster = models.ForeignKey(User, on_delete=models.CASCADE, related_name='booster')
    clients = models.ManyToManyField(User, through='ClientList')
    day_used = models.PositiveIntegerField(_("day used to boost MMR"))
    status = models.IntegerField(choices=(
        (1, _("available")),
        (2, _("boosting")),
        (3, _("waiting for payment")),
        (4, _("done")),
    ))
    current_mmr = models.PositiveIntegerField(_("current MMR"), null=True, blank=True)
    price = models.PositiveIntegerField(_("price"))

    def __str__(self):
        return "<id: %d>MRR range: %d-%d, %s, %s" % (self.id, self.min_mmr, self.max_mmr, self.booster.email, self.get_status_display())


class ClientList(models.Model):
    client = models.ForeignKey(User, on_delete=models.PROTECT)
    ticket = models.ForeignKey(Ticket, on_delete=models.PROTECT)
