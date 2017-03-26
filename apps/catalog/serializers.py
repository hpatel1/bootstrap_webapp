from rest_framework import serializers
from catalog.models import *
from versatileimagefield.serializers import VersatileImageFieldSerializer
from venue.serializers import CategorySerializer
from skeleton.serializers import DynamicModelSerializer

class ImageSerializer(DynamicModelSerializer):
    image = VersatileImageFieldSerializer(
        sizes=[
            ('full_size', 'url'),
            ('thumbnail', 'thumbnail__100x100'),
            ('medium_square_crop', 'crop__400x400'),
            ('small_square_crop', 'crop__50x50')
        ]
    )
    category = CategorySerializer(read_only=True, required=False)
    name = serializers.SerializerMethodField(read_only=True)
        
    class Meta:
        model = Images
        fields = ['id', 'image', 'category', 'name']

    def get_name(self, obj):
        return obj.image.name

    def get_validation_exclusions(self, *args, **kwargs):
        exclusions = super(ImageSerializer, self).get_validation_exclusions()

        return exclusions + ['category']

    #def update(self, instance, validated_data):
    #    return instance.update(
    #        image=validated_data.get('image', instance.image),
    #        category=validated_data.get('category', instance.category)
    #    )
