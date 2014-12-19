'use strict';

/**
 * @ngdoc function
 * @name wedpageApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the wedpageApp
 */
angular.module('wedpageApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
