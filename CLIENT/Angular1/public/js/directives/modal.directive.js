angular
    .module('GPAPP')
    .directive("modal", function() {
        return {
            restrict: "E",
            scope: {
                targetid: "="
            },
            transclude: {
                modalHeading: "?modalHeading",
                modalBody: "?modalBody",
                modalFooter: "?modalFooter"
            },
            templateUrl: "public/js/directives/modal.html",
            link: function(scope, element, attrs, collapseCtrl, transclude) {

            }
        }
    })