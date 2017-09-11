app.factory('dataService', function($http) {
    var factory = {};

    factory.getAllCarPurchases = function() {
        return $http.get('data/car_purchases.json');
    };
    factory.getAllUploads = function() {
        return $http.get('data/uploads.json');
    };
    factory.getAllUsers = function() {
        return $http.get('data/users.json');
    };

    return factory;

});
