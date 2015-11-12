'use strict';

angular.module('myApp.table', ['ngRoute', 'smart-table'])

.config(['$routeProvider', function($routeProvider, $http) {
  $routeProvider.when('/table', {
    templateUrl: 'Table/table.html',
    controller: 'filterCtrl'
  });
}]).controller('filterCtrl', ['$scope', '$filter', function (scope, filter) {




  //http://lorenzofox3.github.io/smart-table-website/
    scope.predicates = ['Areaname', 'Rent50_3'];
    scope.selectedPredicate = scope.predicates[0];
}]).controller("PostsCtrl", function($scope, $http) {
  $http.get('assets/housing.json').
    success(function(data, status, headers, config) {
      $scope.posts = data;
    }).
    error(function(data, status, headers, config) {
      // log error
    });
});