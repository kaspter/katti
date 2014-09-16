'use strict';


var sabheApp = angular.module('sabheApp', [
  'ngRoute',
  'ui.bootstrap',
  'gridster',
  'sabheAppControllers',
  'adminFilters',
  'sabheAppFilters',
  'sabheAppDirectives'
  

]);
sabheApp.config(['$routeProvider','$locationProvider',function($routeProvider, $locationProvider) {
    $routeProvider.
      when('/', {
          templateUrl: 'partials/home', //view
          controller: 'HomeController' //data
      }).
      when('/404', {
          templateUrl: 'partials/404',
          controller: ''
      }).
      when('/services', {
          templateUrl: '/services',
          controller: ''
      }).
      otherwise({
        redirectTo: '/'
      });
    //$locationProvider.html5Mode(true);
}]);

//Add this to have access to a global variable
sabheApp.run(function($rootScope, $http, $location, $modal,$timeout) {
	$rootScope.username = ''; //global variable
	

});

