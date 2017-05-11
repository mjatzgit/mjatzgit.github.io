'use strict';
/**********************************************************************
 * Angular Application
 **********************************************************************/
 angular.module('MainController', [])

 .config(function($stateProvider, $urlRouterProvider) {

    // // For any unmatched url, redirect to /state1
    // $urlRouterProvider.otherwise("/hello");
  
    // // Now set up the states
    // $stateProvider

    // .state('hello', {
    //     url: "/hello",
    //     templateUrl: "partials/hello.html"
    // })
    // .state('projects', {
    //     url: "/projects",
    //     templateUrl: "partials/projects.html"
    // })
    // .state('projects.list', {
    //     url: "/list",
    //     templateUrl: "partials/projects.list.html",
    // })
    // .state('about', {
    //     url: "/about",
    //     templateUrl: "partials/about.html"
    // })
    // .state('tech', {
    //     url: "/technologies",
    //     templateUrl: "partials/tech.html"
    // })
})


 .controller('ProjectModalCtrl', function ($scope, $uibModalInstance, project) {

    $scope.project = project;

    $scope.close = function () {
        $uibModalInstance.close();
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
})

 .service('ProjectService', function($http) {
    return {
        get : function() {
            return $http.get('/data/projects.json');
        }
    }
});

