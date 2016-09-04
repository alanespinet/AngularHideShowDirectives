app.controller('getStudents', ['$scope', function($scope){

  $scope.students = 
  [
    {
      name: 'John Doe',
      age: 32,
      sex: 'M',
      stuyding: true
    },
    {
      name: 'Mary Ann',
      age: 18,
      sex: 'F',
      stuyding: false
    },
    {
      name: 'Beth Zaminsky',
      age: 21,
      sex: 'F',
      stuyding: true
    }
  ];
}]);
