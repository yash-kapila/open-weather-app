/*
    CityDetails component and its controller are defined in this file.
*/

(function () {

    'use strict';

    angular.module('app').component('cityDetails', {
        templateUrl: 'components/details/details.html',
        controller: 'detailsCtrl'
    });

    angular.module('app').controller('detailsCtrl', DetailsCtrl);

    DetailsCtrl.$inject = ['$routeParams', 'spinnerService', 'dataService', 'appService', 'Common', 'DetailsTemplate', 'routeService']

    function DetailsCtrl ($routeParams, spinnerService, dataService, appService, Common, DetailsTemplate, routeService) {

        var vm = this;

        vm.$onInit = function () {
            spinnerService.showSpinner();
            vm.common = Common;
            vm.template = DetailsTemplate;
            vm.forecastList = [];
            vm.cityName = '';
            vm.isDataLoaded = false;
            vm.getSeaLevelData($routeParams.id);
        };

        vm.getSeaLevelData = function (id) {
            dataService.getSeaLevelData(id).then(function (response) {
                vm.forecastList = appService.getHours(response.data.list);
                vm.cityName = response.data.city.name;
                vm.filterForecastList(vm.forecastList);
            }, function (err) {
                vm.cityName = '';
                vm.forecastList = [];
            })
            .finally(function () {
                vm.isDataLoaded = true;
                spinnerService.hideSpinner();
            });
        };

        vm.filterForecastList = function (list) {
            var tempList = list.filter(function(el) {
                return el.dt === "09";
            });
            vm.forecastList = tempList;
            console.log(vm.forecastList);
        };

        vm.goBackToHome = function () {
            routeService.goBackToHome();
        };

    };
})();