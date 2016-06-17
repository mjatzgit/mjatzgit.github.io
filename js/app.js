//var app = angular.module('egerbyg', ['ui.bootstrap', 'duScroll', 'mgcrea.jquery','mgcrea.bootstrap.affix'] );

'use strict';
/**********************************************************************
 * Angular Application
 **********************************************************************/
var app = angular.module('portfolio', [

    // imported Dependencies - - - - 
    //'ngAnimate',
    'ui.bootstrap',
    // 'duScroll',
    // 'mgcrea.jquery',
    // 'mgcrea.bootstrap.affix',
    'ui.router',
    // 'elif', // https://github.com/zachsnow/ng-elif - Provides else if to template
    // 'LocalStorageModule', //angular-local-storage
    'ngSanitize',
    //'vcRecaptcha',
    //'angular.vertilize',
    //'swipe',

    
    // Applications - - - - - - - - - 

    //** MENU ***//***
    // 'MenuService',
    // 'menuController',

    //** FAQ ***//***
    // 'FaqService',
    // 'faqController',

    //** Portfolio ***//***
    // Controllers
    'MainController',
    
    //Services
    //'BeregnerService',
    
    // Factories
    //'BeregnerBasketFactory', //Experimental

    //Directivs
    //'directives',

    //Animations
    //'animations',

    // Helpers
    //'HelperService'

]).config(function($httpProvider) {
   

}).run(function($rootScope, $http, $location ){
   
    
}).controller('MainCtrl', function ( $scope ) {
    console.log('safgfsd');
});

