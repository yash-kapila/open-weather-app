/*
    This service is used to retrieve data from the OpenWeatherMap APIs.
    Data retrieved is then passed on to the calling controller.
*/

(function () {

    'use strict';

    angular.module('app').service('dataService', DataService);

    DataService.$inject = ['$http', 'Common'];

    function DataService ($http, Common) {
        this.getCurrentWeather = function (id) {
            return $http.get(Common.baseUrl.weather, {
                params: {
                    id: id,
                    appid: Common.APPID
                }
            });
        };

        this.getSeaLevelData = function (id) {
            return $http.get(Common.baseUrl.forecast, {
                params: {
                    id: id,
                    appid: Common.APPID
                }
            });
        };
    };
})();