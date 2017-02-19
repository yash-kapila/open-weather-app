/*
    This file contains all the constants that are used by the Forecast component's template
*/

(function () {

    'use strict';

    angular.module('app').constant('ForecastTemplate', {
        'tableHeading': {
            'day': 'Day',
            'seaLevel': 'Sea Level(hPa)',
            'weather': 'Weather Forecast',
            'maxTemp': 'Max Temp(C)',
            'minTemp': 'Min Temp(C)'
        }
    });
})();