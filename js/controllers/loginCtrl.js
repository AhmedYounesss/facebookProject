/**
 * Created by younes on 15/04/2016.
 */
app.controller("loginCtrl",function($scope,$state,$uibModal){
    $scope.login="";
    $scope.pwd="";
    $scope.connect=function(){
        if ($scope.login=="ahmed.younes@gmail.com" && $scope.pwd=="ahmed") {
            $state.go("home");
        }
        else {
            $uibModal.open({
                templateUrl:"pages/modal.html",
                controller:"modal",
                resolve: {
                    modal:function(){
                    },
                    items: function () {
                    }
                }
            });

        }

    }



})