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
    //liste des amis
.controller("homeCtrl",function($scope){
      $scope.records = [
        "Hamza Jridi",
        "Nihel Msilini",
        "Aman Allah",
        "Ami Ami",
        "Ami Ami1",
        "Ami Ami2",


      ]

})
.controller("profilCtrl",function(){

});
