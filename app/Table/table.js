'use strict';

angular.module('myApp.table', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/table', {
    templateUrl: 'Table/table.html',
    controller: 'TableCtrl'
  });
}])

.controller('TableCtrl', [function() {

}]);