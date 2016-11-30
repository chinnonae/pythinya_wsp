from django.conf import settings
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.utils.translation import ugettext_lazy as _
from django.contrib.auth.admin import UserAdmin

from rest_framework.authtoken.models import Token

from .managers import UserManager


class User(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(_('email address'), unique=True)
    first_name = models.CharField(_('first name'), max_length=50, default="")
    last_name = models.CharField(_('last name'), max_length=50, default="")
    is_active = models.BooleanField(_('active'), default=True)
    is_admin = models.BooleanField(_('staff'), default=False)
    telephone = models.CharField(_('telephone'), max_length=10)
    is_booster = models.BooleanField(_('booster'), default=False)
    boosted_time = models.PositiveIntegerField(_('boosted time'), default=0)
    coin = models.PositiveIntegerField(_('coin'), default=0)
    ban_util = models.DateTimeField(_('ban until'), null=True, blank=True)

    objects = UserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    class Meta:
        verbose_name_plural = _('users')
        verbose_name = _('user')

    def get_full_name(self):
        return ('%s %s' % (self.first_name, self.last_name)).strip()

    def get_short_name(self):
        return self.first_name

    def __str__(self):
        return 'email: %s, fullname: %s %s' % (self.email, self.first_name, self.last_name)

    def has_perm(self, perm, obj=None):
        return True

    def has_module_perms(self, app_label):
        return True

    def is_staff(self):
        return self.is_admin


@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)
