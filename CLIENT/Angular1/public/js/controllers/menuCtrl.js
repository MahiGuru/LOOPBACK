angular
    .module('GPAPP')
    .controller("menuCtrl", ['$scope', '$rootScope', '$state', '$http', "Customer", "Venues", "MyItems", "$timeout",
        function($scope, $rootScope, $state, $http, Customer, Venues, MyItems, $timeout) {

            MyItems.find({}, function(myitems) {
                $scope.myItems = myitems;
            });
            console.log("MENU Controller");

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
                if (item.itemCount <= 0) return;
                if (item.itemCount > 1) {
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

                        }
                    });
                } else {
                    MyItems.deleteById({ "id": item.id }, function(data) {
                        item.itemCount = 0;
                        console.log("successfully Item removed");
                        MyItems.find({}, function(myitems) {
                            $scope.myItems = myitems;
                        });
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
                            
                            MyItems.find({}, function(myitems) {
                                console.log("MYITEMSSSSSS", myitems);
                                $scope.myItems = myitems;
                            });
                        });
                    }
                })

            };


            $scope.$watchGroup(['menus', 'myItems'], function(newValue, oldValue, scope) {
                console.log("WATCHING ", newValue);
                MyItems.count(function(data) {
                    $scope.countData = data.count;
                });
            }, true);



        }
    ]);