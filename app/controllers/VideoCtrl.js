function VideoCtrl($scope, $sce) {
    "use strict";

    $scope.content.data = $sce.trustAsResourceUrl($scope.content.data);
}