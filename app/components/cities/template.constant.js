/*
    This file contains all the constants that are used by the Cities component's template
*/

(function () {

    'use strict';

    angular.module('app').constant('CitiesTemplate', {
        'tableHeading': [
            'City', 
            'Current Weather', 
            'Sunrise Time(GMT)', 
            'Sunset Time(GMT)'
        ],
        'loadingMessage': 'Loading Data'
    })
})();