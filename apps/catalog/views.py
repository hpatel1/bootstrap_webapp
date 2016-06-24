from catalog.models import Images
from rest_framework import viewsets, permissions, status, filters
from catalog.serializers import ImageSerializer
from rest_framework.views import APIView
from venue.models import Category
from rest_framework.exceptions import NotFound
from rest_framework.response import Response
from django.db.models.query_utils import Q
import django_filters


class ImageFilter(django_filters.FilterSet):
    venue = django_filters.CharFilter(name="category__venue")
    category = django_filters.MethodFilter(action='multi_category_filter')

    class Meta:
        model = Images
        fields = ['category', 'venue']

    def multi_category_filter(self, queryset, value):
        return queryset.filter(category__id__in = value.split(','))

class ImageViewSet(viewsets.ModelViewSet):
    queryset = Images.objects.categorized().order_by('-created_at')
    serializer_class = ImageSerializer
    filter_backends = (filters.DjangoFilterBackend,)
    filter_class = ImageFilter

    def get_permissions(self):
        if self.request.method in permissions.SAFE_METHODS:
            return (permissions.AllowAny(),)
        return (permissions.IsAuthenticated(),)

    def get_queryset(self):
        if self.request.query_params.get('type', None) == 'uncategorized':
            return Images.objects.uncategorized().order_by('-created_at')
        else:
            return Images.objects.categorized().order_by('-created_at')        


class SetCategory(APIView):
    def get_permissions(self):
        if self.request.method in permissions.SAFE_METHODS:
            return (permissions.AllowAny(),)
        return (permissions.IsAuthenticated(),)

    def post(self, request):
        return self.set_category(request)

    def set_category(self, request):
        if request.data.get('category', None):
            try:
                category = Category.objects.get(id=request.data['category'])
            except Category.DoesNotExist as exception:
                raise NotFound("Requested category is not found.")
        else:
            raise NotFound("Please provide valid category id")

        if request.data.get('images', None):
            for image in Images.objects.filter(id__in = request.data.get('images').split(',')):
                image.category = category
                image.save()
            return Response({'stat':'success'}, status=status.HTTP_200_OK)
        else:
            raise NotFound("No images are found.")
