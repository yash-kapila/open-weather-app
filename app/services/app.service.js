/*
    This file contains the business logic of all components used in the application.
    Ideally, each component would have its own service containing business logic for only that component.
    However, in this case, because the components are very small, they are kept together in a single file.
*/

(function () {

    'use strict';

    angular.module('app').service('appService', AppService);

    AppService.$inject = ['$filter'];

    function AppService ($filter) {

        this.getHours = function (dateList) {
            for(var i=0;i<dateList.length;i++) {
                var date = new Date(dateList[i].dt*1000);
                dateList[i].dt = $filter('date')(date, 'HH', 'GMT');
                dateList[i].dt_txt = $filter('date')(date, 'longDate', 'GMT');
            };

            return dateList;
        };

        this.formatTime = function (weatherData) {
            for(var i=0;i<weatherData.length;i++) {
                var sunrise = new Date(weatherData[i].sys.sunrise*1000);
                weatherData[i].sys.sunrise = $filter('date')(sunrise, 'shortTime', 'GMT');

                var sunset = new Date(weatherData[i].sys.sunset*1000);
                weatherData[i].sys.sunset = $filter('date')(sunset, 'shortTime', 'GMT');
            };

            return weatherData;
        };

        this.filterForecastList = function (list) {
            var tempList = list.filter(function(el) {
                return el.dt === "09";
            });

            return tempList;
        };

        this.convertTemperatureToCelsius = function (list) {
            for(var i=0;i<list.length;i++) {
                list[i].main.temp_max = +(list[i].main.temp_max - 273.15).toFixed(2);
                list[i].main.temp_min = +(list[i].main.temp_min - 273.15).toFixed(2);
            };

            return list;
        }

    };
})();