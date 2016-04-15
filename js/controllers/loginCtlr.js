/**
 * Created by younes on 15/04/2016.
 */
app.controller("loginCtrl",function($scope,$state){
    $scope.login="";
    $scope.pwd="";
    $scope.connect=function(){
        if ($scope.login=="ahmed.younes@gmail.com" && $scope.pwd=="ahmed") {
            $state.go("home");
        }
        else {

        }

    }
})