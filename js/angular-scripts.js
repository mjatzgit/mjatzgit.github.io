'use strict';
/**********************************************************************
 * Angular Application
 **********************************************************************/
 angular.module('portfolio', [])

 

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

