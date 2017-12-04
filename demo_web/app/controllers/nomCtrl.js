myApp
.controller("nomCtrl", function ($scope) {
    //$scope.nombre="Lucas Chavez";
    $scope.save = function (){
        console.log("Hola "+$scope.nombre);
    }
    $scope.lista =  [
        {
            "nombre": "Cuentos",
            "codigo": "",
            "estado": false
        },
        {
            "nombre": "Novelas",
            "codigo": "",
            "estado": true
        },
        {
            "nombre": "Trilogias",
            "codigo": "",
            "estado": true
        },
        {
            "nombre": "Arquitectura",
            "codigo": "",
            "estado": true
        },
        {
            "nombre": "Obras Literarias",
            "codigo": "",
            "estado": true
        }
    ]
});