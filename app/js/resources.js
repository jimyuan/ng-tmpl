(function(){
  'use strict';
  angular.module('ProjectResources', []).factory('C', [
    '$rootScope','$resource','$window','$location',function(
     $rootScope,  $resource,  $window,  $location){

    var normalPrarms = {}, url='/json';

    return $resource(url, normalPrarms, {
      
    });
  }]);
})();