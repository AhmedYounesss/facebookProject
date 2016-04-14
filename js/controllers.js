/**
 * Created by younes on 10/04/2016.
 */
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
      $scope.deconnection = function($scope) {
        return false;
      };

      $scope.items = [
        {
          url: 'https://www.facebook.com/jridi2',
          title: 'jridi Mohamed',
          image: 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/3/005/075/091/0e2fda6.jpg'
        },
        {
          url: '',
          title: 'Jridi Hamza ',
          image: 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAKnAAAAJGFhNzJmNTExLTQ2YTQtNGJlYS04NGQ2LTU4YTI3YTM3OWI4NQ.jpg'
        },
        {
          url: '',
          title: 'Nihel Msilini',
          image: 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAMLAAAAJDJjZjcyOTY3LTRiZWQtNDIwZi1iOTE5LThiY2JhY2E5ZmQ0Zg.jpg'
        },
        {
          url: '',
          title: 'Feika bouthelja'
        },

      ];



      //$scope.records = [
      //  "Hamza Jridi",
      //  "Nihel Msilini",
      //  "Aman Allah",
      //  "Ami Ami",
      //  "Ami Ami1",
      //  "Ami Ami2",
      //
      //
      //]

})
  //récuperer des objet json a partir du fichier data.json.
.controller("profilCtrl",  ['$scope', '$http', function($scope, $http) {
      $http.get('data.json').success(function(_data) {
        $scope.data = _data;
      });
    }]);