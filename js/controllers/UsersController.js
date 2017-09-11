
app.controller('UsersCtrl', function($scope, dataService) {
    dataService.getAllUsers().success(function(data) {
      $scope.users = data;
    });

    $scope.newUser = {};
    $scope.message = "";


    $scope.saveUser = function() {
      $scope.users.push($scope.newUser);
      $scope.newUser = {};
      $scope.message = "New User Added Successfully";
    }
    $scope.selectUser = function (user) {
      $scope.clickedUser = user;
    }
    $scope.updateUser = function () {
      $scope.message = "User Updated Successfully";
    }

    $scope.deleteUser = function () {
      $scope.users.splice($scope.users.indexOf($scope.clickedUser), 1);
      $scope.message = "User Deleted Successfully";
    }

});
