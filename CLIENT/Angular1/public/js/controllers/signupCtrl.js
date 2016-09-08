angular
    .module('GPAPP')
    .controller("signupCtrl", ['$scope', '$rootScope', '$state', '$http', "Customer", function($scope, $rootScope, $state, $http, Customer) {
        $scope.customer = {};
        /*{
            "firstname": "Kutty",
    "lastName": "Gurjala",
    "mobileNo": 9441076540,
    "email": "kutty6535@gmail.com",
    "id": "cust_03",
    "password": "mahi6535"
        }*/
        /* 
         *   Below method will be used for LOGIN CLICK
         *   Session storage SET ITEM customerId if valid;
         *   We can login using EMAIL/PHONENUMER
         *   Validating the emailOrPhone using typeof CUSTOMER...
         *   CUSTOMER FindOne method to retrieve customer Details         
         */
        $scope.signupClick = function() {
            Customer.upsert($scope.customer, function(data) {
                console.log("Customer Created ", data);
            })

        }



    }]);