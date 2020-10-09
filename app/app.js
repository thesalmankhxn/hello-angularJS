var myBBApp = angular.module('myBBApp', []);

myBBApp.config(function () {

});

(function () {

    var app = angular.module("gitViewer", []);

    var MainController = function ($scope, $http) {

        $scope.ninjas = [
            {
                name: 'Yoshi'
        },
        {
            name: 'Crystal'
        },
        {
            name: 'Ryu'
        },
        {
            name: 'Shawn'
    }];

        var onUserComplete = function (response) {
            $scope.user = response.data;
        };

        var onError = function (err) {
            $scope.error = "Could not retrieve data from the api"
        };

        $http.get(`https://api.github.com/users/iamSK77`)
            .then(onUserComplete, onError);

        $scope.message = "Hello, AngularJS!";
    };



    app.controller("MainController", [ '$scope', '$http', MainController]);

}());

// var myNinjaApp = angular.module('myNinjaApp', []);

// myNinjaApp.controller('NinjaController', ['$scope', function($scope){

//     $scope.ninjas = ['yoshi', 'crystal', 'ryu', 'shawn'];

// }]);
