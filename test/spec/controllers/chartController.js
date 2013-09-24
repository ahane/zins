'use strict';

describe('Controller: ChartcontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('zinsApp'));

  var ChartcontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ChartcontrollerCtrl = $controller('ChartcontrollerCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
