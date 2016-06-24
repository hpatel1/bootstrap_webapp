from rest_framework import serializers
from venue.models import *
from versatileimagefield.serializers import VersatileImageFieldSerializer
from cashman.serializers import DynamicModelSerializer

class CategorySerializer(DynamicModelSerializer):
    banner = VersatileImageFieldSerializer(
        sizes=[
            ('thumbnail', 'thumbnail__100x100'),
            ('medium_square_crop', 'crop__400x400'),
            ('small_square_crop', 'crop__50x50')
        ]
    )
    
    class Meta:
        model = Category
        fields = ['id', 'banner', 'name', 'venue']
