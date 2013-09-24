'use strict';

angular.module('zinsApp', [])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/inputView.html'

      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
