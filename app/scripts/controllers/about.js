'use strict';

/**
 * @ngdoc function
 * @name graphTestApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the graphTestApp
 */
angular.module('graphTestApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
