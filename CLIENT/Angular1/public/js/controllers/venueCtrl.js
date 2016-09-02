angular
    .module('GPAPP')
    .controller("venueCtrl", ['$scope', '$rootScope', '$state', '$http', "Customer", "Venues", "MyItems",
        function($scope, $rootScope, $state, $http, Customer, Venues, MyItems) {

            MyItems.find({}, function(myitems) {
                $scope.myItems = myitems;
            });

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
                                }
                            });
                        });
                    })
                });
                $scope.menus = data;
            });

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


            $scope.$watch('menus', function(newValue, oldValue, scope) {
                MyItems.count(function(data) {
                    $scope.countData = data.count;
                });
            }, true);



        }
    ]);