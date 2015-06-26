angular.module('filters', []).filter('myDefault', function() {
    return function(input, placeholder) {
        return !input ? placeholder : input;
    };
});