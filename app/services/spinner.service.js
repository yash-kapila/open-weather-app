/*
    This file belongs to the Spinner component's service. 
    Methods defined here are bound to the Spinner component's Methods
*/

(function () {

    'use strict';

    angular.module('app').service('spinnerService', SpinnerService);

    function SpinnerService () {
        this.showSpinner = function () { };

        this.hideSpinner = function () { };
    };
})();