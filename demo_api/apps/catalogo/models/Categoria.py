from django.db import models


class Categoria(models.Model):

    nombre = models.CharField(max_length=50)
    codigo = models.CharField(max_length=50, null=True, blank=True)
    estado = models.BooleanField(default=True)

    class Meta:
        verbose_name = "Categoria"
        verbose_name_plural = "Categorias"

    def __str__(self):
        return self.nombre
