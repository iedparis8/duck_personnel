/**
 * Created by paulguichon on 29/07/2015.
 */
var personnelApp = angular.module('personnelApp', [
    'ngRoute',
    'servicesControlers',
    'servicesServices',
    'ui.bootstrap'
]);

personnelApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/services', {
        templateUrl: '/static/personnel/app/partials/services-list.html',
        controller: 'ServiceListCtrl'
      }).
      otherwise({
        redirectTo: '/services'
      });
  }]);