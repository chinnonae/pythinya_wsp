# -*- coding: utf-8 -*-
<<<<<<< HEAD
# Generated by Django 1.10.1 on 2016-11-24 03:39
=======
# Generated by Django 1.10.1 on 2016-11-25 10:18
>>>>>>> development
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('payment', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='topuprate',
            name='status',
            field=models.PositiveSmallIntegerField(choices=[(0, 'available'), (1, 'unavailable')], default=0),
        ),
    ]