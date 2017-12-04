from rest_framework import serializers, viewsets
from ..models.Categoria import Categoria


class CategoriaSerializer(serializers.ModelSerializer):
    # serializers.HyperlinkedModelSerializer para mostrar el link de
    # administrador rest

    class Meta:
        model = Categoria
        fields = ('nombre', 'codigo', 'estado')  # 'url',


class CategoriaViewSet(viewsets.ModelViewSet):
    queryset = Categoria.objects.all()
    serializer_class = CategoriaSerializer
