app.directive('videoTemplate', function() {
    return {
        restrict: 'A',
        controller: 'VideoCtrl',
        replace: true,
        templateUrl: 'view/tpl/VideoTpl.html',
        link: function(scope, attr, element) {
        	console.log('hi from video template directive');
        }
    };
});
