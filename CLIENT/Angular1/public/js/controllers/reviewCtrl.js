angular
    .module('GPAPP')
    .controller("reviewController", ['$scope', '$http', 'MyItems', '$state', function($scope, http, MyItems, $state) {
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