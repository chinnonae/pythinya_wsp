from django.core.management.base import BaseCommand
from django.core.management import call_command
import os


class Command(BaseCommand):
    help = 'Start django server and node server for the project'

    def handle(self, *args, **options):
        # start node server

        # start django server
        call_command('runserver')
