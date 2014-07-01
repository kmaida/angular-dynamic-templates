app.directive('imageTemplate', function ($compile) {
    return {
        restrict: 'A',
        controller: 'ImageCtrl',
        replace: true,
        templateUrl: 'view/tpl/ImageTpl.html',
        link: function(scope, attr, element) {
        	console.log('hi from image template directive');
        }
    };
});
