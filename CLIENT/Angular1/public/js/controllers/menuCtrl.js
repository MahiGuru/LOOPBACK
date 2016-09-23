angular
    .module('GPAPP')
    .controller("menuCtrl", ['$scope', '$rootScope', '$state', '$http', "Customer", "Venues", "MyItems", "$timeout", "$filter",
        function($scope, $rootScope, $state, $http, Customer, Venues, MyItems, $timeout, $filter) {

            /* Declaring the ngModels below to use in HTML */
            // Search Input model
            $scope.searchItem = "";
            // Show search results only
            $scope.showSearchItems = true;
            // Show Category Names respective to search criteria
            $scope.ShowCategoryNames = "true";

            $scope.filterCategory = { "veg": "", "nonveg": "", "eggie": "" };

            //Range slider config
            $scope.rangePrice = {
                minValue: 10,
                maxValue: 1000,
                options: {
                    floor: 60,
                    ceil: 1000,
                    step: 5,
                    translate: function(value) {
                        return 'Rs ' + value;
                    }
                }
            };
            /*
             *  Using Below method we are getting the specific Myitems
             *  We store the list of items in MYITEMS;
             */
            MyItems.find({}, function(myitems) {
                $scope.myItems = myitems;
            });

            /*
             *   Check wheather user has logged in or Not;            
             */
            var customerId = sessionStorage.getItem("customerId");
            console.log("customerId", customerId);
            if (customerId != undefined && customerId != null) {
                Customer.findById({ id: customerId }, function(customer) {
                    $scope.customer = customer;
                })
            } else {
                // $state.go("login");
            }
            /*
             *   BELOW Method is use for LOGOUT
             *   Remove the sessionStorage item..
             */
            $scope.logoutClick = function() {
                sessionStorage.removeItem("customerId");
                $state.go("login");
            }

            /*
             *  Using Below method we are getting the specific venue and restaurant menu;
             *  IDs are passing for select specific VENUE and RESTAURANT;
             *  And also we are finding the relation to the above restaurant like sections and categories;
             *  In Callback method we are updating the Itemcount according to MYITEMS count;
             */
            Venues.restaurants({
                id: "venue_01",
                filter: {
                    where: { id: "rest_01" },
                    include: {
                        relation: "sections",
                        scope: {
                            include: {
                                relation: "categories",
                                scope: {
                                    include: {
                                        relation: "items",
                                        scope: {
                                            include: ["ratings", "images"]
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }, function(data) {
                _.forEach(data, function(restaurant) {
                    _.forEach(restaurant.sections, function(section) {
                        _.forEach(section.categories, function(category) {
                            _.forEach(category.items, function(item) {
                                if ($scope.myItems <= 0) item.itemCount = 0;
                                else {
                                    var itemC = _.filter($scope.myItems, function(myitem) {
                                        return item.id == myitem.id;
                                    });
                                    item.itemCount = (itemC[0] != undefined) ? itemC[0].itemCount : 0;
                                    item.confirmedCount = (itemC[0] != undefined) ? itemC[0].confirmedCount : 0;
                                    item.isConfirmed = (itemC[0] != undefined) ? itemC[0].isConfirmed : false;
                                }
                            });
                        });
                    })
                });
                $scope.menus = data;
            });

            /*
             *  Item Add using Below Method
             *  Using Upsert method to update or insert the Item..
             */
            $rootScope.itemAdd = function(item) {
                if (item.confirmedCount != undefined && item.isConfirmed != undefined) {
                    if (item.isConfirmed == true) {
                        item.itemCount = item.itemCount - item.confirmedCount;
                        item.isConfirmed = false;
                    }
                }
                if (item.itemCount != undefined) item.itemCount = item.itemCount + 1;
                MyItems.upsert(item, function(data) {
                    //check Date Item COUNT == 1 for getting the MYITEMS Count; 
                    if (data.itemCount == "1") {
                        MyItems.count(function(data) {
                            $scope.countData = data.count;
                        });
                    }
                });
            };
            /*
             *  Item Remove/Update using Below Method
             *  Using Upsert method to update the Item and deleteById Method will use for delete the item if Item count=1 ..
             */
            $rootScope.itemRemove = function(item) {
                if (item.itemCount <= 0) return;
                if (item.itemCount > 1) {
                    //Check confirmedItems Count for above method work;
                    if (item.isConfirmed != undefined && item.confirmedCount != undefined) {
                        console.log(item.itemCount);
                        if (item.itemCount <= item.confirmedCount) {
                            console.log(item.itemCount, item.confirmedCount, "You can't remove the item");
                            return;
                        }
                    }
                    item.itemCount = item.itemCount - 1;
                    MyItems.upsert(item, function(data) {
                        console.log("successfully Removed the item >>>> ", data.itemCount);
                    });
                } else {
                    MyItems.deleteById({ "id": item.id }, function(data) {
                        item.itemCount = 0;
                        MyItems.find({}, function(myitems) {
                            $scope.myItems = myitems;
                        });
                    });
                }
            }
            $scope.clearFilter = function() {
                $scope.filterCategory = { "veg": "", "nonveg": "", "eggie": "" };
                $scope.rangePrice = {
                    minValue: 50,
                    maxValue: 1000,
                    options: {
                        floor: 60,
                        ceil: 1000,
                        step: 10,
                        translate: function(value) {
                            return 'Rs ' + value;
                        }
                    }
                };
            }

            /*
             * Search Input enter method.
             *  It will set false showSearchItems and ShowCategoryNames to show and remove the category names...
             */
            $scope.searchInputEnter = function(event) {
                if ($scope.searchItem.length == 0) {
                    $scope.showSearchItems = false;
                    $scope.ShowCategoryNames = true;
                }
            }

            /*
             *  Watch Group Menus and MyItems from the List
             *  Using COUNT method to update myitems count..
             */
            $scope.$watchGroup(['menus', 'myItems'], function(newValue, oldValue, scope) {
                MyItems.count(function(data) {
                    $scope.countData = data.count;
                });
            }, true);
            /*
             *  Watch Search Item from the Input.
             *  Display respective items according to search input..
             */
            $scope.$watch("searchItem", function(newValue, oldValue, scope) {
                if (newValue) {
                    if (newValue.length >= 1) {
                        $scope.showSearchItems = true;
                    }
                }
                if (newValue == "") {
                    $scope.showSearchItems = true;
                    $scope.ShowCategoryNames = true;
                }
            });
        }
    ]);