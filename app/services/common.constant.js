/*
    This file contains all app level constants.
*/

(function () {

    'use strict';

    angular.module('app').constant('Common', {
        'baseUrl': {
            'image': '/api/img/w/',
            'weather': '/api/data/2.5/weather',
            'forecast': '/api/data/2.5/forecast'
        },
        'APPID': '85afed9f3c9f06a2acb0d99798a12f2d',
    })
})();