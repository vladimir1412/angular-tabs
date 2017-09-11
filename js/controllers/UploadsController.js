app.controller('UploadsCtrl', function ($scope, dataService) {
  dataService.getAllUploads().success(function(data) {
      $scope.uploads = data;
  });

  $scope.formatDate = function(date, time) {
    return moment(date+' '+time, 'MM/DD/YYYY h:m A').toDate();
  }
});
