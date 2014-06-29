function LayoutCtrl($scope, $http) {
    "use strict";

    $scope.url = 'app/data/content.json';
    $scope.content = [];

    $scope.fetchContent = function() {
        $http.get($scope.url).then(function(result){
            $scope.content = result.data;
        });
    }

    $scope.fetchContent();
}