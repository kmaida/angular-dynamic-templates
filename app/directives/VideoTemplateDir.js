app.directive('videoTemplate', ['$sce', function($sce) {
    return {
        restrict: 'A',
        replace: true,
        templateUrl: 'view/tpl/VideoTpl.html',
        controller: function($scope) {
	      $scope.component.content = $sce.trustAsResourceUrl($scope.component.content);  
        },
        link: function(scope, attr, element) {
        	console.log('hi from video template directive');
        }
    };
}]);
