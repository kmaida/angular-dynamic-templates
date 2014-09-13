app.directive('imageTemplate', [function() {
	return {
		restrict: 'A',
		replace: true,
		templateUrl: 'view/tpl/ImageTpl.html',
		controller: function($scope) {
			$scope.imgPath = 'assets/img/';
		},
		link: function(scope, attr, element) {
			console.log('hi from image template directive');
		}
	};
}]);
