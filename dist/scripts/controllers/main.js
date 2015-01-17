'use strict';

/**
 * @ngdoc function
 * @name wedpageApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the wedpageApp
 */
angular.module('wedpageApp')
  .controller('MainCtrl', ['$log', function ($scope, $log) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.comment = {};
    $scope.greeting = {id : "1", content : "Here it's the content buddy"};

    $scope.send = function (comment) {
      console.log("Sending info");
      console.log(comment); 
      $log("Logging from object injected");
    };
  } ]);
