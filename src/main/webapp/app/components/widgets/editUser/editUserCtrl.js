module.exports = function ($scope, $uibModalInstance, $resource, method, currentUser) {

    $scope.user = currentUser;

    $scope.method = method;
    var url = '/NongKenShop/merchant/add.json';

    if (!isEditModel()) {
        $scope.user.isForbidden = false;
    }

    $scope.submit = function () {
        if ($scope.method === '编辑') {
            url = '/NongKenShop/merchant/update.json'
        }
        
        $resource(url).save($scope.user).$promise.then(function (ack) {
            if (ack.respCode != '1000') {
                alert(ack.respMsg);
                return;
            } 
            
            $uibModalInstance.close();
            $scope.tableParams.page(1);
            $scope.tableParams.reload();
        });

    };

    $scope.userInputClick = function () {
        $scope.errorMsg = '';
    };

    function isEditModel() {
        return $scope.user.id ? true : false;
    }

    $scope.cancle = function () {
        $uibModalInstance.close();
    };

}
