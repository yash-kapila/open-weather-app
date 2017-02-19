/*
    Cities component and its controller are defined in this file.
    This component is a stateless component. All data used in this is fed by its parent component.
*/

(function () {

    'use strict';

    angular.module('app').component('cities', {
        templateUrl: 'components/cities/cities.html',
        controller: 'citiesCtrl',
        bindings: {
            list: '<',
            weatherData: '<'
        }
    });

    angular.module('app').controller('citiesCtrl', CitiesCtrl);

    CitiesCtrl.$inject = ['CitiesTemplate', 'Common', 'routeService', 'appService'];

    function CitiesCtrl (CitiesTemplate, Common, routeService, appService) {

        var vm = this;

        vm.$onInit = function () {
            vm.template = CitiesTemplate;
            vm.common = Common;
        };

        vm.$onChanges = function (changes) {
            vm.weatherData = changes.weatherData.currentValue;
            vm.isDataRetrieving = vm.weatherData.length === 0 ? false : true;
            if(vm.weatherData.length)
                vm.formatDate(vm.weatherData);
        };

        vm.formatDate = function (weatherData) {
            vm.weatherData = appService.formatTime(weatherData);
        };

        vm.viewSeaLevelDetails = function (record) {
            var url = '/' + record.id;
            routeService.goToDetailsView(url);
        };
    };
})();