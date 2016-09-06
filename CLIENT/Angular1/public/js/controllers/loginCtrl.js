angular
    .module('GPAPP')
    .controller("loginCtrl", ['$scope', '$rootScope', '$state', '$http', "Customer", function($scope, $rootScope, $state, $http, Customer) {
        $scope.user = 9441076540;
        $scope.password = "mahi6535";
        $scope.loginClick = function() {
            sessionStorage.clear();
            if (typeof parseInt($scope.user) == "number") {
                Customer.findOne({
                    filter: {
                        where: { "mobileNo": $scope.user }
                    }
                }, function(data) {
                    console.log(data);
                    if (data != null && data != undefined) {
                        sessionStorage.setItem("customerId", data.id);
                        $state.go("menu");
                        console.log("LOGIN SUCCESS MOBILE ", data);
                    }
                });
            } else if (typeof $scope.user == "string") {
                Customer.findOne({
                    filter: {
                        where: { "email": $scope.user }
                    }
                }, function(data) {
                    if (data != null && data != undefined) {
                        sessionStorage.setItem("customerId", data.id);
                        $state.go("menu");
                        console.log("LOGIN SUCCESS Email ", data);
                    }
                });
            }

        }



    }]);