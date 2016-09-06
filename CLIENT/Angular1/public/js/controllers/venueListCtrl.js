angular
    .module('GPAPP')
    .controller('venueListCtrl', ['$scope', '$rootScope', '$state', '$http', 'Venues', 'Restaurants', 'Customer', 'MyItems',
        function($scope, $rootScope, $state, $http, Venues, Restaurants, Customer, MyItems) {
            $scope.title = "MAHIPAL";
            var customerId = sessionStorage.getItem("customerId");
            if (customerId == "undefined" || customerId == null) {
                //$state.go("login");
                //return;
            }

            console.log("VENUE LIST Controller");
            Venues.find({},
                function(data) {
                    $scope.venues = data;
                });
            MyItems.find({}, function(myitems) {
                $scope.myItems = myitems;
            })
            if (customerId != null && customerId != undefined) {
                Customer.findById({ "id": customerId }, function(customer) {
                    console.log(customer);
                    $scope.customer = customer;
                });
            }
            $scope.GetVenueRestaurants = function(venueId, venueName) {
                console.log(venueId);
                $scope.venueName = venueName;
                Restaurants.find({
                        "filter": {
                            where: { "venuesId": venueId },
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
                    },
                    function(data) {

                        //Added Item Count for this user...
                        _.forEach(data, function(hotel) {
                            _.forEach(hotel.sections, function(section) {
                                _.forEach(section.categories, function(category) {
                                    _.forEach(category.items, function(item) {
                                        if ($scope.myItems <= 0) item.itemCount = 0;
                                        else {
                                            var itemC = _.filter($scope.myItems, function(myitem) {
                                                return item.id == myitem.id;
                                            });
                                            item.itemCount = (itemC[0] != undefined) ? itemC[0].itemCount : 0;
                                        }
                                    });
                                    category.items.sort(function(a, b) {
                                        return a.itemCount < 1;
                                    })
                                });
                            })
                        });

                        $scope.restaurants = data;

                        _.filter($scope.restaurants, function(r) {
                            return
                        })

                        $('#myTabs a').click(function(e) {
                            e.preventDefault();
                            $(this).tab('show');
                        });
                    });
            };

            $rootScope.itemRemove = function(item) {
                if (item.itemCount >= 1) {
                    MyItems.findById({ "id": item.id }, function(myitems) {
                        console.log(myitems);
                        if (myitems.itemCount >= 1) {
                            item.itemCount = item.itemCount - 1;
                            MyItems.replaceById({ "id": item.id }, item,
                                function(createdItem) {
                                    item.itemCount = createdItem.itemCount;
                                    console.log("ITEM MINUS Replaced ", createdItem);
                                });
                        } else {
                            MyItems.deleteById({ "id": item.id }, function(data) {
                                item.itemCount = 0;
                                console.log("successfully Item removed");
                            });
                        }
                    });

                }

            }
            $rootScope.itemAdd = function(item) {
                if (item.itemCount != undefined) item.itemCount = item.itemCount + 1;
                else { item.itemCount = 1 }
                MyItems.exists({ "id": item.id }, function(data) {
                    if (data.exists) {
                        MyItems.replaceById({ "id": item.id }, item,
                            function(createdItem) {
                                console.log("ITEM Replaced ", createdItem);
                            });
                    } else {
                        MyItems.create(item, function(createdItem) {
                            console.log("ITEM ADDED ", createdItem);
                        });
                    }
                })

            };
            $scope.$watch('restaurants', function(newValue, oldValue, scope) {
                MyItems.count(function(data) {
                    $scope.countData = data.count;
                });
            }, true);


        }
    ]);