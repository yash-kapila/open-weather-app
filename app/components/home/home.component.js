/*
    Home component and its controller are defined in this file.
*/

(function () {

    'use strict';

    angular.module('app').component('home', {
        templateUrl: 'components/home/home.html',
        controller: 'homeCtrl'
    });

    angular.module('app').controller('homeCtrl', HomeCtrl);

    HomeCtrl.$inject = ['spinnerService', 'CitiesList', 'dataService', '$q', 'HomeTemplate'];

    function HomeCtrl (spinnerService, CitiesList, dataService, $q, HomeTemplate) {

        var vm = this;

        vm.$onInit = function () {
            spinnerService.showSpinner();
            vm.template = HomeTemplate;
            vm.citiesList = CitiesList;
            vm.citiesWeatherData = [];
            vm.getCurrentWeatherDataForAllCities(vm.citiesList);
        };

        vm.getCurrentWeatherDataForAllCities = function (list) {
            var promises = [];

            for(var i=0;i<list.length;i++){
                promises.push(dataService.getCurrentWeather(list[i]._id));
            };

            $q.all(promises).then(function (arr) {
                var weatherData = []
                for(var i=0;i<arr.length;i++){
                    weatherData.push(arr[i].data);
                };

                vm.citiesWeatherData = weatherData;
                vm.dataAvailable = false;
            }, function (err) {
                vm.citiesWeatherData = [];
                vm.dataAvailable = false;
            })
            .finally(function () {
                spinnerService.hideSpinner();
            });
        };
    };
})();