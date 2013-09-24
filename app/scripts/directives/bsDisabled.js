'use strict';

angular.module('zinsApp')
  .directive('bsDisabled', function () {
    return function (scope, element, attrs) {
        console.log(attrs);
    };
  });
