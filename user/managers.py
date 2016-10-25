from django.contrib.auth.models import BaseUserManager


class UserManager(BaseUserManager):
    use_in_migrations = True

    def _create_user(self, email, password, **extra_field):
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_field)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_user(self, email, password=None, **extra_field):
        return self._create_user(email, password, **extra_field)

    def create_superuser(self, email, password, **extra_field):
        user = self._create_user(email, password, **extra_field)
        user.is_admin = True
        user.save(using=self.db)
        return user
