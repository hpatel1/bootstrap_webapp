# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import versatileimagefield.fields


class Migration(migrations.Migration):

    dependencies = [
        ('venue', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Images',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('image', versatileimagefield.fields.VersatileImageField(upload_to=b'images', verbose_name=b'Image')),
                ('created_at', models.DateTimeField(help_text=b'Date when category created.', verbose_name=b'Created At', auto_now_add=True)),
                ('updated_at', models.DateTimeField(help_text=b'Date when category updated.', verbose_name=b'Updated At', auto_now=True)),
                ('category', models.ForeignKey(related_name='images', blank=True, to='venue.Category', null=True)),
            ],
        ),
    ]
