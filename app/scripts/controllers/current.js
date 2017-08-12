'use strict';

/**
 * @ngdoc function
 * @name wats4000ProjectTowardsAMoreUsableApplicationApp.controller:CurrentCtrl
 * @description
 * # CurrentCtrl
 * Controller of the wats4000ProjectTowardsAMoreUsableApplicationApp
 */
angular.module('wats4000ProjectTowardsAMoreUsableApplicationApp')
.controller('CurrentCtrl',	function	($scope,	$routeParams,	current)	{
  $scope.cityID	=	$routeParams.cityID;

  $scope.currentWeather	=	current.query({
    cityID:	$routeParams.cityID
  });
});
