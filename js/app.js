//var app = angular.module('egerbyg', ['ui.bootstrap', 'duScroll', 'mgcrea.jquery','mgcrea.bootstrap.affix'] );

'use strict';
/**********************************************************************
 * Angular Application
 **********************************************************************/
var app = angular.module('portfolio', [

    // imported Dependencies - - - - 
    'ngAnimate',
    'ui.bootstrap',
    'ui.router',
    'ngSanitize',
 

    //** Portfolio ***//
    // Controllers
    'MainController',
    
]).config(function($httpProvider, $routeProvider, $stateProvider, $urlRouterProvider) {
   

   // ROUTING ===============================================
   // set our routing for this application
   // each route will pull in a different controller
 

   $routeProvider

       // home page
       .when('/scotch', {
           templateUrl: 'page-home.html',
           controller: 'mainController'
       })

       // about page
       .when('/scoio', {
           templateUrl: 'page-about.html',
           controller: 'aboutController'
       })

       // contact page
       .when('/contact', {
           templateUrl: 'page-contact.html',
           controller: 'contactController'
       });

     // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/hello");
  
    // Now set up the states
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

 


}).run(function($rootScope, $http, $location ){
   
    
}).controller('MainCtrl', function ( $scope ) {
    console.log('angular.js Up');
});

