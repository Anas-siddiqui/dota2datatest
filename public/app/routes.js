angular.module('appRoutes', ['ngRoute'])

.config(function($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl: 'app/views/matches.html'
        })
        .otherwise({ redirectTo: '/' });
});