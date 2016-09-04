app.directive('studentInfo', function(){
  return {
    restrict: 'E',
    scope: {
      info: '='
    },
    templateUrl: 'templates/student.html'
  };
});
