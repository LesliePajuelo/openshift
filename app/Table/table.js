'use strict';

angular.module('myApp.table', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/table', {
    templateUrl: 'table/table.html',
    controller: 'TableCtrl'
  });
}])

.controller('TableCtrl', [function() {

}]);