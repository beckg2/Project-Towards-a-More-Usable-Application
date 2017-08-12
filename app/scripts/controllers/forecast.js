'use strict';

/**
 * @ngdoc function
 * @name wats4000ProjectTowardsAMoreUsableApplicationApp.controller:ForecastCtrl
 * @description
 * # ForecastCtrl
 * Controller of the wats4000ProjectTowardsAMoreUsableApplicationApp
 */
angular.module('wats4000ProjectTowardsAMoreUsableApplicationApp')
  .controller('ForecastCtrl',	function	($scope,	$routeParams,	forecast)	{
    $scope.cityID	=	$routeParams.cityID;

    $scope.forecastData	=	forecast.query({
      cityID:	$routeParams.cityID
    });
  });
  
