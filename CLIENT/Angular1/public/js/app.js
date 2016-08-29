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
    .controller('VenueController', ['$scope', '$state', '$http', 'Venues', 'Restaurants', 'Items', 'MyItems',
        function($scope, $state, $http, Venues, Restaurants, Items, MyItems) {
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
                                                return item.id == myitem.parentID;
                                            });
                                            item.itemCount = itemC.length;
                                        }
                                    });
                                });
                            })
                        });

                        console.log(data);

                        $scope.restaurants = data;
                        $('#myTabs a').click(function(e) {
                            e.preventDefault();
                            $(this).tab('show');
                        });
                    });
            };

            $scope.itemRemove = function(item) {
                var getanId;
                if (item.itemCount >= 1) {
                    MyItems.find({
                        filter: {
                            where: { "parentID": item.id }
                        }
                    }, function(data) {
                        if (data.length > 0) {
                            MyItems.deleteById({ "id": data[0].id }, function(data) {
                                item.itemCount = (item.itemCount > 0) ? (item.itemCount - 1) : 0;
                                console.log("successfully Item removed");
                            });
                        }
                    });
                }

            }
            $scope.itemAdd = function(item, orderNum) {
                if (item.itemCount != undefined) item.itemCount = item.itemCount + 1;
                else { item.itemCount = 1 }
                var obj = angular.merge({}, item);
                console.log(obj);
                obj.parentID = obj.id;
                delete obj.id;
                MyItems.create(obj, function(data) {
                    $scope.itemCount++;
                    console.log("ITEMSSSSS ", data);
                });

            };
            $scope.$watch('restaurants', function(newValue, oldValue, scope) {
                MyItems.count(function(data) {
                    console.log("COUNT ", data);
                    $scope.countData = data.count;
                });
            }, true);

            //
            /*MyItems.find({
                filter: {
                    where: { "parentID": obj.parentID }
                }
            }, function(data) {
                console.log("MYITEMS FIND DATA ", data);
            })*/

            //ITEMS COUNT  

        }
    ]).controller("reviewController", ['$scope', '$http', 'MyItems', '$state', function($scope, http, MyItems, $state) {
        MyItems.find({}, function(myitems) {
            $scope.myItems = myitems;
           /* var filteredItems = _.filter(myitems, function(item) {
                return item.parentID ==
            })*/
            var k = _.groupBy(myitems, 'parentID');
            console.log(k);


        });


    }]);