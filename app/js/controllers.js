(function(){
  'use strict';
  angular.module('ProjectControllers', [])
  
  .controller('HomeController', [
    '$rootScope', '$scope', function($rootScope, $scope){

      $rootScope.title = 'Home Page'
      // code here
  }]);
})();
