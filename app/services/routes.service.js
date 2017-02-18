/*
    Routing in application is handled by this service
*/

(function () {

    'use strict';

    angular.module('app').service('routeService', RouteService);

    RouteService.$inject = ['$location'];

    function RouteService ($location) {

        this.goToDetailsView = function (path) {
            $location.path(path);
        };

        this.goBackToHome = function () {
            $location.path('/');
        }

    };
})();