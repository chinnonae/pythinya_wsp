# -*- coding: utf-8 -*-
# Generated by Django 1.10.1 on 2016-11-03 01:20
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='boosted_time',
            field=models.PositiveIntegerField(default=0, verbose_name='boosted time'),
        ),
    ]