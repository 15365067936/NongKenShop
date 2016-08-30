module.exports = function ($scope, $uibModalInstance, $resource, NgTableParams, currentDetail, variableService, userService) {

    $scope.detail = currentDetail;
    
    $scope.operations = [{name:"增加库存", value:"add"},
                         {name:"减少库存", value:"minus"}]
    

    $scope.submit = function (NgTableParams) {
    	var url = '/NongKenShop/goods-detail/adjust-number.json?detailId=' + $scope.detail.id + '&operation=' + $scope.adjustOperation + '&number=' + $scope.goodsNumber;
        $resource(url).save(null).$promise.then(function (ack) {

            if (ack.respCode != '1000') {
                $scope.errorMsg = ack.respMsg;
                return;
            }
            
            $uibModalInstance.close();
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
