'use strict';

/**
 * @ngdoc service
 * @name wats4000ProjectTowardsAMoreUsableApplicationApp.citysearch
 * @description
 * # citysearch
 * Factory in the wats4000ProjectTowardsAMoreUsableApplicationApp.
 */
angular.module('wats4000ProjectTowardsAMoreUsableApplicationApp')
  .factory('citysearch', function ($resource) {
    // Service logic
    // ...

    //	Public	API	here
    return	$resource('http://api.openweathermap.org/data/2.5/find?q=:query&units=imperial&type=like&mode=json&APPID=a8e3a9a92d14fe6ae7e920debac049d1',	{},	{
      find:	{
        method:	'GET',
        params:	{
          query:	'seattle'
        },
        isArray:	false
      }
    });
  });
