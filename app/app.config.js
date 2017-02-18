/*
    This is the configuration file for the application. All routes for the app are defined here
*/

(function () {

    'use strict';

    angular.module('app').config(Config);

    Config.$inject = ['$routeProvider'];

    function Config ($routeProvider) {
        $routeProvider
        .when('/', {
            template: '<home></home>'
        })
        .when('/:id', {
            template: '<city-details></city-details>'
        })
        .otherwise({
            redirectTo: '/'
        });
    }
})();