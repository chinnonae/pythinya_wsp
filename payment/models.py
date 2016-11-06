from django.db import models


class TopupRate(models):
    baht = models.PositiveIntegerField()
    coin = models.PositiveIntegerField()
