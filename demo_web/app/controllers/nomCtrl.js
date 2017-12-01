myApp
.controller("nomCtrl", function ($scope) {
    //$scope.nombre="Lucas Chavez";
    $scope.save = function (){
        console.log("Hola "+$scope.nombre);
    }
});