(function(){
  'use strict';
  angular.module('ProjectControllers', [])
  .controller('GlobelController', [
    '$rootScope',function(
     $rootScope){

    $rootScope.title = 'Project title';

  }])
  .controller('HomeController', ['$scope', function($scope){
      // code here
  }]);
})();
