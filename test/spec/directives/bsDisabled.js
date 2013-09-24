'use strict';

describe('Directive: bsDisabled', function () {

  // load the directive's module
  beforeEach(module('zinsApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<bs-disabled></bs-disabled>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the bsDisabled directive');
  }));
});
