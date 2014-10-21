app.controller('VideoCtrl', ['$scope', '$sce', function($scope, $sce) {
	"use strict";

    $scope.component.content = $sce.trustAsResourceUrl($scope.component.content);
    
    console.log('hi from video template controller');
}]);