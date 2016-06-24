from django.contrib.auth.admin import UserAdmin
from django.contrib.auth.models import User, PermissionsMixin
from django.utils.translation import ugettext_lazy as _
from django.contrib import admin
from authentication.models import Account
from authentication.forms import AccountUpdateForm, AccountCreationForm

class AccountAdmin(UserAdmin):
    form = AccountUpdateForm
    add_form = AccountCreationForm

    fieldsets = ( 
         (None, {'fields': ('email', 'password')}), 
         (_('Personal info'), {'fields': ('first_name', 'last_name', 'username')}), 
         (_('Permissions'), {'fields': ('groups', 'user_permissions','is_active', 'is_staff')}), 
    ) 
    add_fieldsets = ( 
        (None, { 
            'classes': ('wide',), 
            'fields': ('first_name', 'last_name', 'email', 'password1', 'password2')} 
        ), 
    ) 


    def save_model(self, request, obj, form, change): 
         instance = form.save(commit=False) 
         instance.save() 
         return instance 

admin.site.register(Account, AccountAdmin)
