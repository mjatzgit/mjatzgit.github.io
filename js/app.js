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
    
]).config(function($httpProvider) {
   

}).run(function($rootScope, $http, $location ){
   
    
}).controller('MainCtrl', function ( $scope ) {
    console.log('safgfsd');
});

