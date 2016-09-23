angular
    .module('GPAPP')
    .directive("gpitem", function($filter, $rootScope) {
        return {
            restrict: "AE",
            transclude: true,
            scope: {
                items: "="
            },
            controller: function($scope, $filter) {

            },
            templateUrl: "public/js/directives/item.html",
            link: function(scope, element, attrs) {
                console.log(scope.items);
                scope.reviewsClick = function(item) {
                    console.log("reviewsCLICK ", item);
                }
            }
        }
    });