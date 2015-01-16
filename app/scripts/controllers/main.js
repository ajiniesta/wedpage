'use strict';

/**
 * @ngdoc function
 * @name wedpageApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the wedpageApp
 */
angular.module('wedpageApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.greeting = {id : "1", content : "Here it's the content buddy"};

  });
