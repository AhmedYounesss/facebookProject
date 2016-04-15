/**
 * Created by younes on 15/04/2016.
 */

//controlleur du modal pour signaler erreur lors de la saisie incorrect du mot de passe ou login
app.controller('modal', function ($scope, $uibModalInstance,items,modal) {
    $scope.modal=modal;
    $scope.ok = function () {
        $uibModalInstance.close();
    };

})

