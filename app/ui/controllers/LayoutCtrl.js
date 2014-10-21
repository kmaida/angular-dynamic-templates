app.controller('LayoutCtrl', ['$scope', '$http', function($scope, $http) {
	"use strict";

    $scope.url = 'app/data/data.json';
    $scope.data = [];

    $scope.fetchData = function() {
        $http.get($scope.url).then(function(result){
            $scope.data = result.data;
        });
    }

    $scope.fetchData();
}]);