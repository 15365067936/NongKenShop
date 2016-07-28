module.exports = function ($scope, $uibModalInstance, $resource, method, currentUser) {

    $scope.user = currentUser;

    $scope.method = method;
    var url = '/NongKenShop/merchant/add.json';

    if (!isEditModel()) {
        $scope.user.isForbidden = false;
    }

    $scope.submit = function () {
        console.log($scope.user);
        if ($scope.method === '编辑') {
            url = '/NongKenShop/merchant/update.json'
        }
        $resource(url).save($scope.user).$promise.then(function (ack) {
            console.log(ack);

            if (ack.respCode != '1000') {
                alert(ack.respMsg);
                return;
            } else {
            	alert(ack.data);
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
