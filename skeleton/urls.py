from rest_framework import routers
from django.contrib import admin

from authentication.views import AccountViewSet, LoginView, LogoutView
from django.conf.urls import url, include
from django.conf.urls.static import static
from ${1}.views import IndexView
from catalog.views import ImageViewSet, SetCategory
from ${1} import settings
from venue.views import CategoryViewSet

router = routers.SimpleRouter()
router.register(r'accounts', AccountViewSet)
router.register(r'catalog', ImageViewSet)
router.register(r'category', CategoryViewSet)

urlpatterns = static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

urlpatterns += [
    url(r'^admin/', include(admin.site.urls)),

    url(r'^api/v1/catalog/setCategory/$', SetCategory.as_view(), name='set-category'),
    url(r'^api/v1/', include(router.urls)),
    url(r'^api/v1/auth/login/$', LoginView.as_view(), name='login'),
    url(r'^api/v1/auth/logout/$', LogoutView.as_view(), name='logout'),

    url('^.*$', IndexView.as_view(), name='index'),
]
