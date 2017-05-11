//var app = angular.module('egerbyg', ['ui.bootstrap', 'duScroll', 'mgcrea.jquery','mgcrea.bootstrap.affix'] );

'use strict';
/**********************************************************************
 * Angular Application
 **********************************************************************/
angular.module('portfolio', [

    // imported Dependencies - - - - 
    'ngAnimate',
    'ui.bootstrap',
    'ui.router',
    //'ngSanitize',
 
    //** Portfolio ***//
    // Controllers
    // 'MainController',
    
])
.config([
    '$routeProvider',
    '$httpProvider', 
    '$locationProvider',
    function($routeProvider, $httpProvider, $locationProvider) {
        
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
.run(['$rootScope', '$http', '$location', function( $rootScope, $http, $location ){
   
    
}])

