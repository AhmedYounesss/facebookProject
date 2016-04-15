/**
 * Created by younes on 10/04/2016.
 */
var app = angular.module("myApp",["ui.router"]);

app.filter('searchFor', function(){

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