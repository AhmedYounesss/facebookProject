/**
 * Created by younes on 10/04/2016.
 */

//routage des pages
angular.module("myApp",["ui.router","controllers"]);

angular.module("myApp").config(function($stateProvider,$urlRouterProvider){

    $urlRouterProvider.otherwise("/login");

    $stateProvider.state("login",{

        url:"/login",
        templateUrl:"pages/login.html",
        controller: "loginCtrl"
    })
        .state("home",{
            url:"/home",
            templateUrl:"pages/home.html",
            controller: "homeCtrl"
        })
        .state("profil",{
            url:"/profil",
            templateUrl:"pages/profil.html",
            controller: "profilCtrl"
        });

})

.filter('searchFor', function(){

//les filtres doivent retourner une fonction.
    return function(arr, searchString){

        if(!searchString){
            return arr;
        }

        var result = [];

        searchString = searchString.toLowerCase();

        // Using the forEach helper method to loop through the array
        angular.forEach(arr, function(item){

            if(item.title.toLowerCase().indexOf(searchString) !== -1){
                result.push(item);
            }

        });

        return result;
    };

});