from django.contrib import admin
from .models.Categoria import Categoria


@admin.register(Categoria)
class CategoriaAdmin(admin.ModelAdmin):
    """docstring for CategoriaAdmin"""
    list_display = ("nombre", "codigo", "estado")
    search_fields = ("nombre", "codigo")
    list_per_page = 3
