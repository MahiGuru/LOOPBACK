// Copyright IBM Corp. 2015,2016. All Rights Reserved.
// Node module: loopback-example-angular
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

angular
    .module('GPAPP', [
        'lbServices',
        'ui.router'
    ])
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider,
        $urlRouterProvider) {
        $stateProvider
            .state('venues', {
                url: '',
                templateUrl: 'public/views/venues.html',
                controller: 'VenueController'
            });
        $urlRouterProvider.otherwise('venues');
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
                        console.log(data);
                        $scope.restaurants = data;
                        $('#myTabs a').click(function(e) {
                            e.preventDefault();
                            $(this).tab('show');
                        });
                    });
            };
            $scope.itemAdd = function(item, orderNum) {
                var obj = angular.merge({}, item);
                console.log(obj);
                delete obj.id;
                MyItems.create(obj, function(data) {
                    console.log("ITEMSSSSS ", data);
                });
            };

            /*
                        //WORKING REST EXAMPLE......
                        $http({
                            method: "GET",
                            url: "http://localhost:3000/api/venues?filter[include][restaurants][sections][categories][items]=ratings&filter[include][restaurants][sections][categories][items]=images"
                        }).then(function(result) {
                            console.log("RESULT ", result);
                        }, function(err) {
                            console.log(err);
                        })
            */

        }
    ]);