angular
    .module('GPAPP')
    .directive("panelset", function() {
        return {
            restrict: "AE",
            transclude: true,
            scope: {},
            templateUrl: "public/js/directives/collapse.html",
            controller: function() {
                var self = this;
                self.panelList = [];
                self.addPanel = function(panel) {
                    self.panelList.push(panel)
                }
                self.selectedPanel = function(selectedPanel) {
                    angular.forEach(self.panelList, function(panel) {
                        panel.active = false;
                    });
                }
            },
            link: function(scope, element, attrs) {
                scope.active = false;
                console.log("Panelsssss");
            },
            controllerAs: "panelset"
        }
    }).directive("pane", function() {
        return {
            restrict: "AE",
            transclude: true,
            scope: {
                heading: "@"
            },
            template: '<div class="panel panel-default" ng-transclude></div>',
            require: "^panelset",
            link: function(scope, element, attrs, panelsetCtrl) {
                console.log(panelsetCtrl);
                panelsetCtrl.addPanel(scope);
            }
        }
    }).directive("collapse", function() {
        return {
            restrict: "AE",
            scope: {},
            transclude: true,
            template: `
                <div ng-transclude></div>
             `,
            controllerAs: "collapse",
            controller: function() {
                var self = this;
                console.log(self);

            },
            link: function(scope, element, attrs) {
                console.log("FROM COLLAPSE");
            }
        }
    }).directive("panels", function() {
        return {
            restrict: "E",
            scope: {},
            transclude: {
                panelHeading: "?panelHeading",
                panelBody: "?panelBody"
            },
            templateUrl: "public/js/directives/collapse.html",
            require: "^collapse",
            link: function(scope, element, attrs, collapseCtrl, transclude) {}
        }
    });