app.directive('contentItem', function ($compile) {
    var imageTemplate = '<section image-template></section>';
    var videoTemplate = '<section video-template></section>';
    var noteTemplate = '<section ng-include="\'view/tpl/NoteTpl.html\'"></section>';

    var getTemplate = function(contentType) {
        var template = '';

        switch(contentType) {
            case 'image':
                template = imageTemplate;
                break;
            case 'video':
                template = videoTemplate;
                break;
            case 'notes':
                template = noteTemplate;
                break;
        }

        return template;
    }

    var linker = function(scope, element, attrs) {
        scope.rootDirectory = 'assets/img/';

        element.html(getTemplate(scope.content.content_type)).show();

        $compile(element.contents())(scope);
    }

    return {
        restrict: "A",
        replace: true,
        link: linker,
        scope: {
            content:'='
        }
    };
});
