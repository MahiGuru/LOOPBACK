angular
    .module('GPAPP')
    .controller("loginCtrl", ['$scope', '$rootScope', '$state', '$http', "Customer", function($scope, $rootScope, $state, $http, Customer) {
        $scope.user = 9441076540;
        $scope.password = "mahi6535";
        $scope.loginClick = function() {

            if (typeof $scope.user == "number") {

            } else if (typeof $scope.user == "string") {

            }

        }



    }]);