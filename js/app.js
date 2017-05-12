'use strict';
/**********************************************************************
 * Angular Application
 **********************************************************************/
angular.module('portfolio', [
    'ngAnimate',
    'ui.bootstrap',
    'ui.router',
    'ngSanitize',
 ])

.config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        	
       console.log('config');

       // // For any unmatched url, redirect to /state1
       $urlRouterProvider.otherwise("/hello");
       
       // // Now set up the states
       $stateProvider

       .state('hello', {
           url: "/hello",
           templateUrl: "partials/hello.html"
       })
       .state('projects', {
           url: "/projects",
           templateUrl: "partials/projects.html"
       })
       .state('projects.list', {
           url: "/list",
           templateUrl: "partials/projects.list.html",
       })
       .state('about', {
           url: "/about",
           templateUrl: "partials/about.html"
       })
       .state('tech', {
           url: "/technologies",
           templateUrl: "partials/tech.html"
       })
   

}])

.run([
	'$rootScope', 
	'$http', 
	'$location', 
	'$trace', 
	function( $rootScope, $http, $location, $trace ){
   		
   		console.log('run');
     	$trace.enable('TRANSITION');
     
}])

