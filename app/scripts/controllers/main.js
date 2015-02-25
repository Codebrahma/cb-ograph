'use strict';

/**
 * @ngdoc function
 * @name graphTestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the graphTestApp
 */
angular.module('graphTestApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
