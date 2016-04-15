/**
 * Created by younes on 15/04/2016.
 */
app.controller("profilCtrl",  ['$scope', '$http', function($scope, $http) {

    $http.get('data.json').success(function(_data) {
        $scope.data = _data;
    });

    $scope.propriete=["titre","travaille à","a étudié à"]



    $scope.journalShow = function(){
        $scope.show1=true;
        $scope.show4=false;
        $scope.show2=false;
        $scope.show5=false;
        $scope.show6=false;

    }
    //$scope.journaHide = function(){
    //    $scope.show=false;
    //}

    $scope.proposShow = function(){
        $scope.show2=true;
        $scope.show=false;
        $scope.show4=false;
        $scope.show5=false;
        $scope.show6=false;

    }
    //$scope.proposHide = function(){
    //    $scope.show2=false;
    //}

    $scope.amisShow = function(){
        $scope.show4=true;
        $scope.show2=false;
        $scope.show6=false;
        $scope.show5=false;

    }
    //$scope.amisHide = function(){
    //    $scope.show4=false;
    //}

    $scope.photoShow = function(){
        $scope.show5=true;
        $scope.show=false;
        $scope.show4=false;
        $scope.show6=false;


    }
    $scope.plusShow = function(){
        $scope.show6=true;
        $scope.show=false;
        $scope.show4=false;
        $scope.show5=false;


    }

}]);