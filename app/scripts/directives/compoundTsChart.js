'use strict';

angular.module('zinsApp')
  .directive('compoundTsChart', function () {
    return {
      template: '<div>test</div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the compoundTsChart directive');
      }
    };
  });
