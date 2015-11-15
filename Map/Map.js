'use strict';

angular.module('myApp.Map', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/Map', {
    templateUrl: 'Map/Map.html',
    controller: 'MapCtrl'
  });
}])

.controller('MapCtrl', [function($http) {



var map = L.map('map').setView([37.8, -100], 5);

L.geoJson(counties).addTo(map);


function style(feature) {
    return {
        
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '1',
        fillOpacity: 0.1
    };
}

L.geoJson(statesData, {style: style}).addTo(map);

}]);

