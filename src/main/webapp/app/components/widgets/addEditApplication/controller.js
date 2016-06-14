module.exports = function ($scope, $uibModalInstance, $resource, NgTableParams, method, currentApplication, variableService) {

    $scope.application = currentApplication;

    $scope.goodsCategory = variableService.getGoodsCategory();
    $scope.method = method;
    var url = '/NongKenShop/goods/add-goods.json';

    if (!isEditModel()) {
        $scope.application.channel = 'weixin';
        $scope.application.isActive = true;
        $scope.application.enableToken = false;
    }

    $scope.submit = function (NgTableParams) {

//        if (isEditModel()) {
//            url = '/application/sys/updateapp';
//        }

        $resource(url).save($scope.application).$promise.then(
            function (ack) {

            if (ack.respCode != '1000') {
                $scope.errorMsg = ack.respMsg;
                return;
            }
            
            $uibModalInstance.close();
            $scope.tableParams.page(1);
            $scope.tableParams.reload();
        });

    };

    $scope.applicationInputClick = function () {
        $scope.errorMsg = '';
    };

    function isEditModel() {
        return $scope.application.id ? true : false;
    }

    $scope.cancle = function () {
        $uibModalInstance.close();
    };

}
