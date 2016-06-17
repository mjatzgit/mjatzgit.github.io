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



    $scope.projects = [];
    ProjectService.get().success(function(data){
        $scope.projects = data;
         console.log($scope.projects);
    });
      
    $scope.navState = false;

    $scope.navToggle = function (state) {
        $scope.navState = $scope.navState === false ? true: false;
        console.log($scope.navState);
    }

  

    $scope.openProject = function (project) {

        var modalInstance = $uibModal.open({
            
            templateUrl: '../modals/projectmodal.html',
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
            $log.info('Modal dismissed at: ' + new Date());
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

