module.exports = function ($scope, $uibModalInstance, message) {

    $scope.message = message;
    
    $scope.submit = function () {
        $uibModalInstance.close();
    };

    $scope.cancle = function () {
        $uibModalInstance.dismiss('cancel');
    };

}
