'use strict';
/**********************************************************************
 * Angular Application
 **********************************************************************/
angular.module('MainController', [])

.config(function($stateProvider, $urlRouterProvider) {
   
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
      controller: function($scope) {
        $scope.things = ["A", "Set", "Of", "Things"];
      }
    })
    .state('about', {
      url: "/about",
      templateUrl: "partials/about.html"
    })

    .state('tech', {
      url: "/technologies",
      templateUrl: "partials/tech.html"
    })
})

.controller('MainController', function ( $scope, ProjectService, $uibModal, $log ) {

    /***  NAV SWITCH ****/
    $scope.navState = false;

    $scope.navToggle = function (state) {
        $scope.navState = $scope.navState === false ? true: false;
    }


    /*** GET PROJECTS from service) ****/
    $scope.projects = [];
    ProjectService.get().success(function(data){
        var projects = data;
        $scope.projects = data;
         //console.log( projects);
         splitIn2Columns(projects) //odd - even
    });
      

    /*** PROJECT COLUMNS ****/ 
    $scope.projectColOne = [];
    $scope.projectColTwo = [];
    
    function splitIn2Columns(projects) {
        angular.forEach( projects, function(value, key) {

            if(key %2 == 0 ){   $scope.projectColOne.push( value ) } 
            else{               $scope.projectColTwo.push( value ) }
                
        })
    }
      

   
    /*** PROJECT MODAL ****/ 
    $scope.openProject = function (project) {

        var modalInstance = $uibModal.open({
            
            templateUrl: '../partials/modal.html',
            controller: 'ProjectModalCtrl',
            size: 'lg',
            resolve: {
                project: function () {
                    return project;
                }
            }
        });

        modalInstance.result.then(function () {
            
        }, function () {
             
        });
    };

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

