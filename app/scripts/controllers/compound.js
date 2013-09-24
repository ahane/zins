'use strict';

angular.module('zinsApp')
  .controller('CompoundCtrl', function ($scope, Values) {
        $scope.values = Values;
        $scope.settings = {target: 'kt'}

        $scope.formulas = {}
        $scope.formulas.kt = function (v) {
            var kt = v.k0*Math.pow((1+(v.p/100)), v.t)
            return Math.round(kt);
        };

        $scope.formulas.k0 = function (v) {
            var k0 = v.kt/Math.pow((1+(v.p/100)), v.t);
            return Math.round(k0);
        };

        $scope.formulas.p = function (v) {
            var p = 100*(Math.pow(v.kt/ v.k0, 1 / v.t) - 1);
            return Math.round(p*100)/100;
        };

        $scope.formulas.t = function (v) {
            var t = Math.log(v.kt/ v.k0)/Math.log(1+(v.p/100));
            return Math.round(t*100)/100;
        };



        $scope.calcTarget = function () {

            $scope.values[$scope.settings.target] = $scope.formulas[$scope.settings.target]($scope.values);
        };

        $scope.$watch('values', $scope.calcTarget, true);

        $scope.settings.isTarget = function (lit) {
            //console.log('it'); komsisch das dies so oft gecalled wird
            return $scope.settings.target === lit;
        };




  });
