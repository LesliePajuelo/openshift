'use strict';

angular.module('myApp.table', ['ngRoute', 'smart-table'])

.config(['$routeProvider', function($routeProvider, $http) {
  $routeProvider.when('/table', {
    templateUrl: 'Table/table.html',
    controller: 'filterCtrl'
  });
}]).controller('filterCtrl', ['$scope', '$filter', function (scope, filter) {
    scope.rowCollection = [{
    "Rent50_2":1059,
    "Rent50_0":630,
    "Rent50_1":783,
    "Rent50_3":1319,
    "Rent50_4":1742,
    "county":63,
    "State":6,
    "countyname":"Plumas County",
    "CBSASub":"NCNTY06063N06063",
    "Areaname":"Plumas County, CA",
    "county_town_name":"Plumas County",
    "pop2010":20007,
    "state_alpha":"CA"
  },
  {
    "Rent50_2":570,
    "Rent50_0":428,
    "Rent50_1":464,
    "Rent50_3":840,
    "Rent50_4":843,
    "county":27,
    "State":21,
    "countyname":"Breckinridge County",
    "CBSASub":"NCNTY21027N21027",
    "Areaname":"Breckinridge County, KY",
    "county_town_name":"Breckinridge County",
    "pop2010":20059,
    "state_alpha":"KY"
  },
  {
    "Rent50_2":541,
    "Rent50_0":429,
    "Rent50_1":452,
    "Rent50_3":786,
    "Rent50_4":843,
    "county":89,
    "State":72,
    "countyname":"Luquillo Municipio",
    "CBSASub":"METRO21940M21940",
    "Areaname":"Fajardo, PR MSA",
    "county_town_name":"Luquillo Municipio",
    "pop2010":20068,
    "state_alpha":"PR"
  }];

    scope.predicates = ['firstName', 'lastName', 'birthDate', 'balance', 'email'];
    scope.selectedPredicate = scope.predicates[0];
}]);