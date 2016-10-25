from django.conf import settings
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.utils.translation import ugettext_lazy as _

from rest_framework.authtoken.models import Token

from .managers import UserManager


class User(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(_('email address'), unique=True)
    first_name = models.CharField(_('first name'), max_length=50, default="")
    last_name = models.CharField(_('last name'), max_length=50, default="")
    is_active = models.BooleanField(_('active'), default=True)

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


@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)
