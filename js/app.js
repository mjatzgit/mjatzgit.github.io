'use strict';
/**********************************************************************
 * Angular Application
 **********************************************************************/
angular
.module('portfolioApp', [
    'ngAnimate',
    'ui.bootstrap',
    'ui.router',
    'ngSanitize',
    'siteController',
    
 ])

.config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider, transitionService) {
        	
       // console.log('config');

       // // For any unmatched url, redirect to /state1
       $urlRouterProvider.otherwise("/hello");
       
       // // Now set up the states
       $stateProvider

       .state('hello', {
           url: "/hello",
           templateUrl: "partials/hello.html",
       })
       .state('projects', {
           url: "/projects",
           templateUrl: "partials/projects.html",
       })
       .state('projects.list', {
           url: "/list",
           templateUrl: "partials/projects.list.html",
       })
       .state('about', {
           url: "/about",
           templateUrl: "partials/about.html",
       })
       .state('tech', {
           url: "/technologies",
           templateUrl: "partials/tech.html",
        })
   

}])

.run([
	'$rootScope', 
	'$http', 
	'$location', 
 
	function( $rootScope, $http, $location ){
   		
     	//$trace.enable('TRANSITION');

     	// track current state for active tab
        $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
            console.log(toState);
            $rootScope.currentState = toState.name;
        });
     
}])

