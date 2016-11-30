# -*- coding: utf-8 -*-
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
