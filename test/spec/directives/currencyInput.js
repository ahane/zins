'use strict';

describe('Directive: currencyInput', function () {

  // load the directive's module
  beforeEach(module('zinsApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<currency-input></currency-input>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the currencyInput directive');
  }));
});
