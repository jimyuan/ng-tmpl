(function(){
  'use strict';
  var viewPath = "/views";
  angular.module('ProjectApp', [
    'ngRoute',
    'ngResource',
    'LocalStorageModule',
    'ProjectControllers',
    'ProjectDirectives',
    'ProjectResources',
    'ProjectServices',
    'ProjectTemplate',
    'ProjectFilters'
  ])
  .config(['$routeProvider', function($routeProvider){

    $routeProvider
      .when('/home', {
        templateUrl: viewPath + '/home.html',
        controller:  'HomeController'
      })
      
      .otherwise({redirectTo: '/home'});

  }]);
})();