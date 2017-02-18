/*
    This file contains all the constants that are used by the CityDetails component's template
*/

(function () {

    'use strict';

    angular.module('app').constant('DetailsTemplate', {
        'backBtn': 'Go Back',
        'tableHeading': {
            'day': 'Day',
            'seaLevel': 'Sea Level(hPa)',
            'weather': 'Weather'
        },
        'loadingMessage': 'Loading Data'
    })
})();