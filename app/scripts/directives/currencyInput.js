'use strict';

angular.module('zinsApp')
  .directive('currencyInput', function () {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function(scope, element, attrs, ngModel) {

            if(ngModel){//we cant do anything unless we have a model

                ngModel.$parsers.push(function (value) {
                    return Math.round(value*100);
                });

                ngModel.$formatters.push(function (value) {
                    return value/100;
                });

            }

        }
    }
  });
