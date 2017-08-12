'use strict';

/**
 * @ngdoc overview
 * @name wats4000ProjectTowardsAMoreUsableApplicationApp
 * @description
 * # wats4000ProjectTowardsAMoreUsableApplicationApp
 *
 * Main module of the application.
 */
angular
  .module('wats4000ProjectTowardsAMoreUsableApplicationApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
