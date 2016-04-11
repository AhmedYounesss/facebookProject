angular.module("controllers",[])
.controller("loginCtrl",function($scope,$state){
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
.controller("homeCtrl",function(){

})
.controller("profilCtrl",function(){

});
