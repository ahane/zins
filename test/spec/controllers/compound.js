'use strict';

describe('Controller: CompoundCtrl', function () {

  // load the controller's module
  beforeEach(module('zinsApp'));

  var CompoundCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CompoundCtrl = $controller('CompoundCtrl', {
      $scope: scope
    });
  }));
    describe('All four compound interest formulas', function () {
        var a = {p:1, k0:100, t:1, kt:101};
        var b = {p:0.01, k0:100, t:1, kt:100};
        var c = {p:1, k0:10000, t:2, kt:10201};

        it('should calculate kt with the compound interest formula', function () {

            expect(scope.calcKt(a.k0, a.p, a.t)).toBe(a.kt);
            expect(scope.calcKt(b.k0, b.p, b.t)).toBe(b.kt);
            expect(scope.calcKt(c.k0, c.p, c.t)).toBe(c.kt);
        });
        it('should calculate k0 with the compound interest formula', function () {

            expect(scope.calcK0(a.kt, a.p, a.t)).toBe(a.k0);
            expect(scope.calcK0(b.kt, b.p, b.t)).toBe(b.k0);
            expect(scope.calcK0(c.kt, c.p, c.t)).toBe(c.k0);
        });
        it('should calculate p with the compound interest formula', function () {

            expect(scope.calcP(a.k0, a.kt, a.t)).toBe(a.p);

            expect(scope.calcP(c.k0, c.kt, c.t)).toBe(c.p);
        });
        it('should calculate t with the compound interest formula', function () {

            expect(scope.calcT(a.k0, a.kt, a.p)).toBe(a.t);
            expect(scope.calcT(c.k0, c.kt, c.p)).toBe(c.t);
        });
    });




});

