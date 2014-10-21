app.directive('loadComponent', function($compile) {

	// hashtable of component templates
	var templates = {
		image: '<div ng-include="\'view/tpl/ImageTpl.html\'"></div>',
		video: '<div ng-include="\'view/tpl/VideoTpl.html\'"></div>',
		notes: '<div ng-include="\'view/tpl/NotesTpl.html\'"></div>'
	};

	// function to fetch the correct component
	var _getComponent = function(componentType) {
		return templates[componentType] || '';
	};

	// link function
	var _link = function(scope, element, attrs) {
		scope.$watch('component', function(newVal, oldVal) {
			if (newVal) {
				element.html(_getComponent(scope.component.component)).show();
	
				$compile(element.contents())(scope);
			}
		});
	};

	return {
		restrict: 'A',
		replace: true,
		link: _link,
		scope: {
			component:'='
		}
	};
});
