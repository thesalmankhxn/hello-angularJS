var myBBApp = angular.module('myBBApp', []);

myBBApp.config(function () {

});

(function () {

    var app = angular.module("gitViewer", []);

    var MainController = function ($scope, $http) {

        var onUserComplete = function (response) {
            $scope.user = response.data;
        };

        var onError = function (err) {
            $scope.error = "Could not retrieve data from the api"
        };

        $http.get("https://api.github.com/users/iamSK77")
            .then(onUserComplete, onError);

        $scope.message = "Hello, AngularJS!";
    };

    app.controller("MainController", MainController);

}());