app.controller('VideoCtrl', ['$scope', '$sce', function($scope, $sce) {
    "use strict";

    $scope.content.data = $sce.trustAsResourceUrl($scope.content.data);
}]);