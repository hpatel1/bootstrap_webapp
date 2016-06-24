# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('authentication', '0003_auto_20160622_1734'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='account',
            name='is_admin',
        ),
    ]
