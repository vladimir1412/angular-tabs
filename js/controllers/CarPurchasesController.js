app.controller('CarPurchasesCtrl', function ($scope, dataService) {
  dataService.getAllCarPurchases().success(function(data) {
      $scope.carPurchaces = data;
  });
});
