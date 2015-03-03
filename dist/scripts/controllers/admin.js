'use strict';

/**
 * @ngdoc function
 * @name wedpageApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the wedpageApp
 */
angular.module('wedpageApp')
  .controller('AdminCtrl', function ($scope) {
  	$scope.secret = "eva3antonio";
  	$scope.isSecret = false;
  	$scope.login = function (incomingSecret) {
  		
  	}
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
