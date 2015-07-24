(function(){
  'use strict';
  var viewPath = './partial';
  angular.module('ProjectApp', [
    'ngRoute',
    'ngResource',
    'ProjectControllers',
    'ProjectDirectives',
    'ProjectResources',
    'ProjectServices',
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
