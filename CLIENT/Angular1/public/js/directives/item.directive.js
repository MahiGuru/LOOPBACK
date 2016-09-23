angular
    .module('GPAPP')
    .directive("gpitem", function() {
        return {
            restrict: "AE",
            transclude: true,
            scope: {
                items: "="
            },
            templateUrl: "public/js/directives/item.html",
            link: function(scope, element, attrs) {
                console.log("Itemsssss", scope);
            }
        }
    });