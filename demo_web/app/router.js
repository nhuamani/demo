/* URL de las paginas */
myApp

.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/404");

    $stateProvider

    .state("pag1", {
        url:"/pagina1",
        templateUrl:"app/views/pagina.html"
    })

    .state("notFound", {
        url:"/404",
        templateUrl:"app/views/404.html"
    });
});