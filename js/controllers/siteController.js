'use strict';
/**********************************************************************
 * Angular Application
 **********************************************************************/
 angular.module('siteController', [])

 .controller('siteController', function ( $window, $scope, ProjectService, $uibModal, $log ) {

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