'use strict';

describe('Service: Values', function () {

  // load the service's module
  beforeEach(module('zinsApp'));

  // instantiate service
  var Values;
  beforeEach(inject(function (_Values_) {
    Values = _Values_;
  }));

  it('should do something', function () {
    expect(!!Values).toBe(true);
  });

});
