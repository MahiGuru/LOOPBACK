angular
    .module('GPAPP')
    .directive("tabset", function() {
        return {
            restrict: "AE",
            transclude: true,
            scope: {},
            templateUrl: "public/js/directives/tabs.html",
            controller: function() {
                var self = this;
                self.tabs = [];
                self.addTab = function(tab) {
                    self.tabs.push(tab);
                    if (self.tabs.length === 1) {
                        tab.active = true;
                    }
                }
                self.select = function(selectedTab) {
                    angular.forEach(self.tabs, function(tab) {
                        tab.active = false;
                    });
                    selectedTab.active = true;
                }
            },
            controllerAs: "tabset"
        }
    }).directive("tab", function() {
        return {
            restrict: "AE",
            transclude: true,
            scope: {
                heading: "@",
                showtab: "@"
            },
            template: `<div class="tabs-panel" ng-show="active" ng-class="{'ng-show':(showtab == 'false')}" ng-transclude></div>`,
            require: "^tabset",
            link: function(scope, element, attrs, tabsetCtrl) {
                scope.active = false;
                tabsetCtrl.addTab(scope);
            }
        }
    })