from rest_framework import serializers
from django.contrib.contenttypes.models import ContentType

class DynamicFieldsModelSerializer(serializers.ModelSerializer):
    """
    A ModelSerializer that takes an additional `fields` argument that
    controls which fields should be displayed.
    """

    def __init__(self, *args, **kwargs):
        # Don't pass the 'fields' arg up to the superclass
        fields = kwargs.pop('fields', None)

        # Instantiate the superclass normally
        super(DynamicFieldsModelSerializer, self).__init__(*args, **kwargs)

        if fields is not None:
            # Drop any fields that are not specified in the `fields` argument.
            allowed = set(fields)
            existing = set(self.fields.keys())
            for field_name in existing - allowed:
                self.fields.pop(field_name)


class DynamicModelSerializer(DynamicFieldsModelSerializer):
    """
    Sets the :model: attribute of a serializer based on the queryset.
    """
    def __init__(self, *args, **kwargs):
        try:
            view = kwargs.pop('context', None).pop('view', None) if kwargs else None
            qs = view.get_queryset()
            if qs:
                model = qs.model
                ct = ContentType.objects.get_for_model(model)
                self.Meta.model = ct.model_class()
        except:
            pass
        return super(DynamicModelSerializer, self).__init__(*args, **kwargs)
