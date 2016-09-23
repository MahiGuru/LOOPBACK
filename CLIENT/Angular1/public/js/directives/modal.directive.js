angular
    .module('GPAPP')
    .directive("modal", function() {
        return {
            restrict: "E",
            scope: {},
            transclude: true,
            template: "<div ng-transclude></div>",
            link: function(scope, element, attrs, collapseCtrl, transclude) {
                console.log("MODAL DIRECTIVE");
            }
        }
    }).directive("modalOptions", function() {
        return {
            restrict: "E",
            scope: {},
            transclude: {
                modalheader: "?modalHeading",
                modalBody: "?modalBody",
                modalFooter: "?modalFooter"
            },
            templateUrl: "public/js/directives/modal.html",
            require: "^modal",
            link: function(scope, element, attrs, collapseCtrl, transclude) {
                console.log("MODAL DIRECTIVE");
            }
        }
    })