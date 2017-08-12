'use strict';

/**
 * @ngdoc function
 * @name wats4000ProjectTowardsAMoreUsableApplicationApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the wats4000ProjectTowardsAMoreUsableApplicationApp
 */
angular.module('wats4000ProjectTowardsAMoreUsableApplicationApp')
  .controller('MainCtrl', function ($scope, current) {
    	$scope.current	=	current.query();

      $scope.refreshCurrent	=	function(){
        $scope.current	=	current.query({
          location:	$scope.location
        });
      };
  });
