angular
    .module('GPAPP')
    .controller("reviewController", ['$scope', '$http', 'MyItems', '$state', "$rootScope", "$timeout", function($scope, $http, MyItems, $state, $rootScope, $timeout) {

        MyItems.find({}, function(myitems) {
            $scope.myItems = myitems;
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


        $rootScope.itemRemove = function(item) {
            if (item.itemCount > 1) {
                MyItems.findById({ "id": item.id }, function(myitems) {
                    if (myitems.itemCount >= 1) {
                        item.itemCount = item.itemCount - 1;
                        MyItems.replaceById({ "id": item.id }, item,
                            function(createdItem) {
                                item.itemCount = createdItem.itemCount;
                                console.log("ITEM MINUS Replaced ", createdItem);
                            });
                    }
                });
            } else {
                MyItems.deleteById({ "id": item.id }, function(data) {
                    console.log("successfully Item removed");

                    MyItems.find({}, function(myitems) {
                        $scope.myItems = myitems;
                    });
                });


            }

        }
        $scope.recommendItem = "Recommended"
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
            });

        };


        $scope.$watchCollection('myItems', function(newValue, oldValue, scope) {
            console.log("WATCHING ", newValue);
            MyItems.count(function(data) {
                $scope.countData = data.count;
            });
        }, true);



    }]);