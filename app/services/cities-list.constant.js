/*
    This file contains the list of cities that are displayed at the Home Page
*/

(function () {

    'use strict';

    var list = [
        {
            "_id":2759794,
            "name":"Amsterdam",
            "country":"NL"
        },
        {
            "_id":2968815,
            "name":"Paris",
            "country":"FR"
        },
        {
            "_id":6356055,
            "name":"Barcelona",
            "country":"ES"
        },
        {
            "_id":524901,
            "name":"Moscow",
            "country":"RU"
        },
        {
            "_id":2673730,
            "name":"Stockholm",
            "country":"SE"
        }
    ];

    angular.module('app').constant('CitiesList', list);

})();