# -*- coding: utf-8 -*-
# Generated by Django 1.10.1 on 2016-11-30 13:41
from __future__ import unicode_literals

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='BoosterProfile',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('current_mmr', models.PositiveIntegerField(default=0, verbose_name='current MMR')),
                ('steam_id', models.CharField(max_length=255, verbose_name='Steam ID')),
                ('id_card_image_src', models.TextField(blank=True, null=True, verbose_name="ID card image's source")),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]