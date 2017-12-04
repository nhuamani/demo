var myApp = angular.module("myApp", [
    'ui.router'
    ]);

myApp
.config(function ($stateProvider){
    $stateProvider

    .state("pag1", {
        url:"/pagina1",
        templateUrl:"app/views/pagina.html"
    });
});