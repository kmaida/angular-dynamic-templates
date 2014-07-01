app.directive('contentItem', function ($compile) {
	var templates = {
		image: '<section image-template></section>',
		video: '<section video-template></section>',
		notes: '<section ng-include="\'view/tpl/NotesTpl.html\'"></section>'
	};

	var getTemplate = function(contentType) {
		return templates[contentType] || '';
	};

	var linker = function(scope, element, attrs) {
		element.html(getTemplate(scope.content.content_type)).show();

		$compile(element.contents())(scope);
	};

	return {
		restrict: 'A',
		replace: true,
		link: linker,
		scope: {
			content:'='
		}
	};
});
