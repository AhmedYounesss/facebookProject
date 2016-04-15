/**
 * Created by younes on 15/04/2016.
 */
app.controller("profilCtrl",  ['$scope', '$http', function($scope, $http) {

    $http.get('http://localhost:63342/facebookProject/data.json').success(function() {
        $scope.data = $http.data;
    });

    $scope.propriete=["titre","travaille à","a étudié à"]



    $scope.journalShow = function(){
        $scope.show1=true;
        $scope.show2=false;
        $scope.show3=false;
        $scope.show4=false;
        $scope.show5=false;

    }
    //$scope.journaHide = function(){
    //    $scope.show=false;
    //}

    $scope.proposShow = function(){
        $scope.show1=false;
        $scope.show2=true;
        $scope.show3=false;
        $scope.show4=false;
        $scope.show5=false;
    }
    //$scope.proposHide = function(){
    //    $scope.show2=false;
    //}

    $scope.amisShow = function(){
        $scope.show1=false;
        $scope.show2=false;
        $scope.show3=true;
        $scope.show4=false;
        $scope.show5=false;
    }
    //$scope.amisHide = function(){
    //    $scope.show4=false;
    //}

    $scope.photoShow = function(){
        $scope.show1=false;
        $scope.show2=false;
        $scope.show3=false;
        $scope.show4=true;
        $scope.show5=false;

    }
    $scope.plusShow = function(){
        $scope.show1=false;
        $scope.show2=false;
        $scope.show3=false;
        $scope.show4=false;
        $scope.show5=true;

    }

}]);