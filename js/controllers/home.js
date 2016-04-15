/**
 * Created by younes on 15/04/2016.
 */
app.controller("homeCtrl",function($scope){
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