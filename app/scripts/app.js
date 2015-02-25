'use strict';

/**
 * @ngdoc overview
 * @name graphTestApp
 * @description
 * # graphTestApp
 *
 * Main module of the application.
 */
angular
.module('graphTestApp', [
  'ngAnimate',
  'ngCookies',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ngTouch',
  'LocalStorageModule',
  'tg.graph',
])

.config(["$routeProvider", function ($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    })
    .otherwise({
      redirectTo: '/home'
    });
}])

.config(["localStorageServiceProvider", function(localStorageServiceProvider){
  localStorageServiceProvider.setPrefix('tg');
}]);
