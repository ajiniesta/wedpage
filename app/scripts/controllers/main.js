'use strict';

/**
 * @ngdoc function
 * @name wedpageApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the wedpageApp
 */
angular.module('wedpageApp')
  .controller('MainCtrl', ['$scope', '$log', '$http', function ($scope, $log, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.comment = {};
    $scope.greeting = {id : "1", content : "Here it's the content buddy"};

    $scope.send = function (comment) {
      $log.info("Send stuff {}", comment);
      $http.get('http://rest-service.guides.spring.io/greeting').
        success(function(data) {
            $scope.greeting = data;
            $log.info(data);
        });
    };

  } ]);
