(function () {

    'use strict';

    angular.module('app').component('forecast', {
        templateUrl: 'components/forecast/forecast.html',
        controller: 'forecastCtrl',
        bindings: {
            forecastList: '<'
        }
    });

    angular.module('app').controller('forecastCtrl', ForecastCtrl);

    ForecastCtrl.$inject = ['ForecastTemplate', 'Common'];

    function ForecastCtrl (ForecastTemplate, Common) {

        var vm = this;

        vm.$onInit = function () {
            vm.template = ForecastTemplate;
            vm.common = Common;
        };
    };
})();