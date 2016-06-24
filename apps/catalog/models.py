from django.db import models
from venue.models import Category
from django.utils.translation import gettext as _
from versatileimagefield.fields import VersatileImageField, PPOIField
from django.db.models.query_utils import Q

class ImagesManager(models.Manager):
    def categorized(self):
        return self.get_queryset().filter(~Q(category=None))

    def uncategorized(self):
        return self.get_queryset().filter(category=None)

class Images(models.Model):
    image = VersatileImageField('Image', upload_to='images')
    category = models.ForeignKey(Category, null=True, blank=True, related_name='images')
        
    created_at = models.DateTimeField(verbose_name=_('Created At'),
        auto_now_add=True, help_text=_("Date when category created."))
    updated_at = models.DateTimeField(verbose_name=_('Updated At'),
        auto_now=True, help_text=_("Date when category updated."))

    objects = ImagesManager()

    class Meta:
        verbose_name = 'Image'
        verbose_name_plural = 'Images'

    def __unicode__(self):
        return "%s - %s" %(self.id, self.image)
