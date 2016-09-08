angular
    .module('GPAPP')
    .controller("reviewController", ['$scope', '$http', 'MyItems', '$state', "$rootScope", "$timeout", function($scope, $http, MyItems, $state, $rootScope, $timeout) {

        //Set the model for ITEm wheather it is recommended or not..
        $scope.recommendItem = "Recommended";
        /*
         *  Using Below method we are getting the specific Myitems
         *  We store the list of items in MYITEMS;
         */
        MyItems.find({}, function(myitems) {
            $scope.myItems = myitems;
        });
        /*
         *  Below method is used for removing the ITEM from MYITEMS list
         *  Passing item ID for remove the ITEM.
         */
        $scope.removeItem = function(item) {
            console.log(item);
            MyItems.deleteById({ "id": item.id }, function(data) {
                console.log("successfully Item removed");
                MyItems.find({}, function(myitems) {
                    $scope.myItems = myitems;
                })
            });
        };

        /*
         *  Below method is CONFIRM THE ITEMS
         *  AND Setting the ISCONFIRMED Flag and CONFIRMEDCOUNT;
         */
        $scope.confirmItems = function() {
            MyItems.find({}, function(items) {
                _.forEach(items, function(item) {
                    if (item.isConfirmed != undefined && item.confirmedCount != undefined && item.confirmedCount == false) {
                        item.confirmedCount = item.confirmedCount + (item.itemCount - item.confirmedCount);
                    } else {
                        item.isConfirmed = true;
                        item.confirmedCount = item.itemCount;
                    }
                    MyItems.upsert(item, function(data) {
                        console.log("ITEM UPDATED", data);
                    });
                });
                $timeout(function() {
                    MyItems.find({}, function(myitems) {
                        $scope.myItems = myitems;
                    })
                }, 1000)
            })
        };

        /*
         *  Below method is used to display of specific ITEM.
         *  Passing item ID for Getting the ITEM Details.
         */
        $scope.addPreference = function(item) {
            MyItems.findById({ "id": item.id }, function(myitem) {
                $scope.pItem = myitem;
            });
            $('#myModal').modal("show");
        };

        /*
         *  Below method is used for SAVE Preference for specific ITEM.
         *  USING UPSERT method to update the item;
         */
        $scope.savePreference = function(item) {
            MyItems.upsert(item, function(createdItem) {
                console.log("ITEM Replaced ", createdItem);
                $('#myModal').modal("hide");
            });
        };

        /*
         *  TODO : Remove below method once developement done.
         *  Temporarley added below method for ITEM REMOVE
         *  This method suppose to come from MENU controller
         *  only for timebeing using this method...
         */
        $rootScope.itemRemove = function(item) {
            if (item.itemCount <= 0) return;
            if (item.itemCount > 1) {
                //Check confirmedItems Count for above method work;
                if (item.isConfirmed != undefined && item.confirmedCount != undefined) {
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
        };

        /*
         *  TODO : Remove below method once developement done.
         *  Temporarley added below method for ITEM ADD
         *  This method suppose to come from MENU controller
         *  only for timebeing using this method...
         */
        $rootScope.itemAdd = function(item) {

            if (item.itemCount != undefined) item.itemCount = item.itemCount + 1;
            MyItems.upsert(item, function(data) {
                console.log("successfully updated the item >>>> ", data);
            });
        };

        /*
         *  Watch COLLECTION of MYITEMS.
         *  And update the myitems count..
         */
        $scope.$watchCollection('myItems', function(newValue, oldValue, scope) {
            $scope.confirmedItemCount = 0;
            $scope.pendingItemCount = 0;
            console.log("WATCHING ", newValue);
            _.forEach($scope.myItems, function(myitem) {
                if (myitem.confirmedCount != undefined) {
                    $scope.confirmedItemCount = $scope.confirmedItemCount + 1;
                    if (myitem.itemCount > myitem.confirmedCount) {
                        $scope.pendingItemCount = $scope.pendingItemCount + 1;
                    }
                } else {
                    $scope.pendingItemCount = $scope.pendingItemCount + 1;
                }
            })
            MyItems.count(function(data) {
                $scope.countData = data.count;
            });
        }, true);



    }]);