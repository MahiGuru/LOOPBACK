angular
    .module('GPAPP')
    .controller("loginCtrl", ['$scope', '$rootScope', '$state', '$http', "Customer", function($scope, $rootScope, $state, $http, Customer) {
        console.log("login Ctrl created......");
    }]);