# -*- coding: utf-8 -*-
# Generated by Django 1.10.1 on 2016-10-31 00:37
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='telephone',
            field=models.CharField(default='0800000000', max_length=10, verbose_name='telephone'),
            preserve_default=False,
        ),
    ]