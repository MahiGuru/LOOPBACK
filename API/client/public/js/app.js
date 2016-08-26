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


// Copyright IBM Corp. 2015. All Rights Reserved.
// Node module: loopback-example-angular
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

angular
    .module('GPAPP')
    .controller('VenueController', ['$scope', '$state', '$http', 'Venues', 'Restaurants', 'Items',
        function($scope, $state, $http, Venues, Restaurants, Items) {
            $scope.title = "MAHIPAL";

            Venues.find({
                    "filter": {
                        where: { "id": "57c01ce92824f838441deaba" },
                        include: {
                            relation: "restaurants",
                            scope: {
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
                        }
                    }
                },
                function(data) {
                    console.log(data);
                });


  


            //WORKING REST EXAMPLE......
            $http({
                method: "GET",
                url: "http://localhost:3000/api/venues?filter[include][restaurants][sections][categories][items]=ratings&filter[include][restaurants][sections][categories][items]=images"
            }).then(function(result) {
                console.log("RESULT ", result);
            }, function(err) {
                console.log(err);
            })


            //console.log(Venues.find());
        }
    ]).controller('RestaurantCtrl', ['$scope', '$state', 'Restaurants',
        function($scope, $state, Restaurants) {
            //            console.log(Restaurants.find().$promise.then());



        }
    ]).controller('SectionsCtrl', ['$scope', '$state', 'Sections',
        function($scope, $state, Venues, Sections) {

        }
    ]).controller('CategoryCtrl', ['$scope', '$state', 'Categories',
        function($scope, $state, Venues, Categories) {

        }
    ]).controller('ItemsCtrl', ['$scope', '$state', 'Items',
        function($scope, $state, Venues, Items) {

        }
    ]).controller('RatingCtrl', ['$scope', '$state', 'Images',
        function($scope, $state, Venues, Images) {

        }
    ]).controller('ImgCtrl', ['$scope', '$state', 'Ratings',
        function($scope, $state, Venues, Ratings) {

        }
    ]);