angular
    .module('GPAPP', [
        'lbServices',
        'ui.router'
    ])
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider,
        $urlRouterProvider) {
        $stateProvider
            .state('venues', {
                url: '/',
                templateUrl: 'public/views/venues.html',
                controller: 'VenueController'
            })
            .state('reviewItems', {
                url: '/reviewItems',
                templateUrl: 'public/views/reviewItems.html',
                controller: "reviewController"
            });

        $urlRouterProvider.otherwise('/');
    }]);

angular
    .module('GPAPP')
    .controller('VenueController', ['$scope', '$rootScope', '$state', '$http', 'Venues', 'Restaurants', 'Items', 'MyItems',
        function($scope, $rootScope, $state, $http, Venues, Restaurants, Items, MyItems) {
            $scope.title = "MAHIPAL";

            Venues.find({},
                function(data) {
                    $scope.venues = data;
                });
            MyItems.find({}, function(myitems) {
                $scope.myItems = myitems;
            })
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
    ]).controller("reviewController", ['$scope', '$http', 'MyItems', '$state', function($scope, http, MyItems, $state) {
        MyItems.find({}, function(myitems) {
            $scope.myItems = myitems;
            console.log("MYITEMS >>>> ", myitems)
            var groupOfItems = _.groupBy(myitems, 'parentID');
        });
        $scope.removeItem = function(item) {
            console.log(item);
            MyItems.deleteById({ "id": item.id }, function(data) {
                console.log("successfully Item removed");
                MyItems.find({}, function(myitems) {
                    $scope.myItems = myitems;
                })
            });
        }
        $scope.addPreference = function(item) {
            MyItems.findById({ "id": item.id }, function(myitem) {
                $scope.pItem = myitem;
            });
            $('#myModal').modal("show");
        }
        $scope.savePreference = function(item) {
            MyItems.replaceById({ "id": item.id }, item,
                function(createdItem) {
                    console.log("ITEM Replaced ", createdItem);
                    $('#myModal').modal("hide");
                });
        }

        $scope.$watch('myItems', function(newValue, oldValue, scope) {
            MyItems.count(function(data) {
                $scope.countData = data.count;
            });
        }, true);



    }]);