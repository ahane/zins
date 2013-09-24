'use strict';

describe('Directive: compoundTsChart', function () {

  // load the directive's module
  beforeEach(module('zinsApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<compound-ts-chart></compound-ts-chart>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the compoundTsChart directive');
  }));
});
