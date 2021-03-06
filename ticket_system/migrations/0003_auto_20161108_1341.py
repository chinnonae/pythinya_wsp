# -*- coding: utf-8 -*-
# Generated by Django 1.10.1 on 2016-11-08 13:41
from __future__ import unicode_literals

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('ticket_system', '0002_auto_20161102_0435'),
    ]

    operations = [
        migrations.AlterField(
            model_name='clientship',
            name='client',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='clientship',
            name='ticket',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='ticket_system.Ticket'),
        ),
    ]
