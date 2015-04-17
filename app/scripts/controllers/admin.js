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
  	$scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.secret = "eva3antonio";
  	$scope.isSecret = false;
  	$scope.login = function (incomingSecret) {
  		
  	}
    $scope.comments = [];
    $scope.loadData = function () {
      $http.get('/getcomments').
        success(function(data) {
            $scope.comments = data;
        });
    }
    
  });
