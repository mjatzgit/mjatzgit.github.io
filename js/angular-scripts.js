'use strict';
/**********************************************************************
 * Angular Application
 **********************************************************************/
 angular.module('MainController', [])

 .config(function($stateProvider, $urlRouterProvider) {

    // For any unmatched url, redirect to /hello
    $urlRouterProvider.otherwise("/hello");
  
    // Now set up the states
    $routeProvider


    .when('hello', {
        url: "/hello",
        templateUrl: "partials/hello.html"
    })


    .when('projects', {
        url: "/projects",
        templateUrl: "partials/projects.html"
    })

    .when('projects.list', {
        url: "/list",
        templateUrl: "partials/projects.list.html",
    })

    .when('about', {
        url: "/about",
        templateUrl: "partials/about.html"
    })

    .when('tech', {
        url: "/technologies",
        templateUrl: "partials/tech.html"
    })
})

 .controller('MainController', function ( $window, $scope, ProjectService, $uibModal, $log ) {

    /***  NAV SWITCH ****/
    $scope.navState = true;
    $scope.screenMode = 'desktop'
    var screenWidth = $window.innerWidth;


    $scope.navToggle = function (state) {
        if($scope.screenMode == 'mobile'){
            console.log(state);
            $scope.navState = $scope.navState === false ? true: false;
            console.log($scope.navState);
        }
    }

    //on load
    toggleScreenAndNavMode(screenWidth)

    //window resize event
    angular.element($window).bind('resize', function(){
        $scope.$apply(function() {

            screenWidth = $window.innerWidth;
            toggleScreenAndNavMode(screenWidth)

         });
    });


    function toggleScreenAndNavMode(screenWidth){
        if(screenWidth > 800){
            $scope.screenMode = 'desktop'
            $scope.navState = true;
        }
        else{
            
            if($scope.screenMode != 'mobile'){
                $scope.navState = false;
                $scope.screenMode = 'mobile'
            }
         
        }
        //console.log(screenWidth);
        console.log($scope.screenMode);
    }

    $scope.closeMobileMenu = function (){
        if($scope.screenMode == 'mobile'){
            $scope.navState = false;
        }
    }



    
    // $scope.$watch('window.innerWidth', function() {
    //     console.log(window.innerWidth);
    // });

     
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

