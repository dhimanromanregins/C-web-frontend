from django.contrib import admin
from .models import Contact

admin.site.register(Contact)

from django.contrib.sessions.models import Session

@admin.register(Session)
class SessionAdmin(admin.ModelAdmin):
    list_display = ['session_key', 'expire_date', 'get_decoded']

    def get_decoded(self, obj):
        return obj.get_decoded()
    
    get_decoded.short_description = 'Session Data'