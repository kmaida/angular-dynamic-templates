app.directive('loadComponent', function($compile) {

	// hashtable of component templates
	var templates = {
		image: '<section image-template></section>',
		video: '<section video-template></section>',
		notes: '<section ng-include="\'view/tpl/NotesTpl.html\'"></section>'
	};

	// function to fetch the correct component
	var getComponent = function(componentType) {
		return templates[componentType] || '';
	};

	// link function
	var linker = function(scope, element, attrs) {
		scope.$watch('component', function(newVal, oldVal) {
			if (newVal) {
				element.html(getComponent(scope.component.component)).show();
	
				$compile(element.contents())(scope);
			}
		});
	};

	return {
		restrict: 'A',
		replace: true,
		link: linker,
		scope: {
			component:'='
		}
	};
});
