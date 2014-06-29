var app = angular.module('myApp', []);

function LayoutCtrl($scope, $http) {
    "use strict";

    $scope.url = 'content.json';
    $scope.content = [];

    $scope.fetchContent = function() {
        $http.get($scope.url).then(function(result){
            $scope.content = result.data;
        });
    }

    $scope.fetchContent();
}

