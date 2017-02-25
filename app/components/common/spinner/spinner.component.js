/*
    Spinner component and its controller are defined in this file.
    The Spinner service methods are also bound to the controller methods here.
*/

(function () {

    'use strict';

    angular.module('app').component('spinner', {
        templateUrl: 'components/common/spinner/spinner.html',
        controller: 'spinnerCtrl'
    });

    angular.module('app').controller('spinnerCtrl', SpinnerCtrl);

    SpinnerCtrl.$inject = ['spinnerService']

    function SpinnerCtrl (spinnerService) {

        var vm = this;

        vm.$onInit = function () {
            vm.spinner = true;
            spinnerService.showSpinner = showSpinner.bind(vm);
            spinnerService.hideSpinner = hideSpinner.bind(vm);
        };

        function showSpinner () {
            this.spinner = true;
        };

        function hideSpinner () { 
            this.spinner = false;
        };

    };
})();