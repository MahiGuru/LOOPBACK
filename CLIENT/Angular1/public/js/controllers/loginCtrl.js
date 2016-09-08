angular
    .module('GPAPP')
    .controller("loginCtrl", ['$scope', '$rootScope', '$state', '$http', "Customer", function($scope, $rootScope, $state, $http, Customer) {
        /* 
         *   Declaring Model for USER and PASSWORD value
         *   For development we are prefixing the USER        
         */
        $scope.emailOrPhone = 9441076540;
        $scope.password = "mahi6535";
        /* 
         *   Below method will be used for LOGIN CLICK
         *   Session storage SET ITEM customerId if valid;
         *   We can login using EMAIL/PHONENUMER
         *   Validating the emailOrPhone using typeof CUSTOMER...
         *   CUSTOMER FindOne method to retrieve customer Details         
         */
        $scope.loginClick = function() {
            //Initially we are clearing the session storage;
            sessionStorage.clear();
            if (typeof parseInt($scope.emailOrPhone) == "number") {
                Customer.findOne({
                    filter: {
                        where: { "mobileNo": $scope.emailOrPhone, "password": $scope.password }
                    }
                }, function(data) {
                    console.log(data);
                    if (data != null && data != undefined) {
                        sessionStorage.setItem("customerId", data.id);
                        $state.go("menu");
                        console.log("LOGIN SUCCESS MOBILE ", data);
                    }
                });
            } else if (typeof $scope.emailOrPhone == "string") {
                Customer.findOne({
                    filter: {
                        where: { "email": $scope.emailOrPhone }
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