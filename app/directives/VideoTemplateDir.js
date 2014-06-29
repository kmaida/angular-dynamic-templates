app.directive('videoTemplate', function ($compile) {
    return {
        restrict: "A",
        controller: 'VideoCtrl',
        replace: true,
        templateUrl: 'view/tpl/VideoTpl.html',
        link: function(scope, attr, element) {
        	console.log('hi from video template directive');
        }
    };
});
