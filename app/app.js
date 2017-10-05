'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}])  
.directive("demoDirective", function() {
  return {
      template : "<h1><marquee>Harish Mahajan </marquee></h1>"
  };
})
.directive("sdemoDirective", function() {
  return {
      template : "<h1>Login</h1><div><b>Email : </b><input type='text'> <br> <button>Send</button></div>"
  };
});
