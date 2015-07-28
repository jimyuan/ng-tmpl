(function(){
  'use strict';
  var viewPath = './partial';
  angular.module('ProjectApp', [
    'ngRoute',
    'ngAnimate',
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
      .when('/page1', {
        templateUrl: viewPath + '/page1.html'
      })
      .when('/type', {
        templateUrl: viewPath + '/type.html'
      })
      
      .otherwise({redirectTo: '/home'});

  }]);
})();
