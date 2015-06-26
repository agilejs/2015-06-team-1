angular.module('filters', []).filter('myDefault', function() {
    'use strict';
    return function(input, placeholder) {
        return !input ? placeholder : input;
    };
});