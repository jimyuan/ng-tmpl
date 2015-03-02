(function(){
  'use strict';
  angular.module('ProjectServices', []).factory('C', [
    'localStorageService',function(
     ls){

    return{
      storage: function(){
        var store;
        ls.isSupported ? store = ls : store = ls.cookie;
      
        return {
          set: function(key, val){
            return store.set(key, val);
          },
          get: function(key){
            return store.get(key);
          },
          remove: function(key){
            return store.remove(key);
          },
          clear: function(){
            return store.clearAll();
          },
          bind: function(scope, property){
            return store.bind(scope, property);
          }
        };
      }
    };
  }]);
})();