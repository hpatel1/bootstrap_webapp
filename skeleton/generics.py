from rest_framework import mixins, status
from rest_framework.generics import GenericAPIView
from django.utils import timezone
from rest_framework.response import Response


class GenericView(mixins.ListModelMixin,
                       mixins.CreateModelMixin,
                       mixins.UpdateModelMixin, 
                       mixins.DestroyModelMixin,
                       mixins.RetrieveModelMixin, 
                       GenericAPIView):
    """ 
    Concrete view for retrieving, updating or deleting a model instance. 
    """ 
    def get(self, request, *args, **kwargs): 
        return self.list(request, *args, **kwargs) 
 
    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs) 

    def put(self, request, *args, **kwargs): 
        return self.update(request, *args, **kwargs)

    def delete(self, request, *args, **kwargs):
        return self.delete(request, *args, **kwargs)
