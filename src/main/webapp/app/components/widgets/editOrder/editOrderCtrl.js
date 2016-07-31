module.exports = function ($scope, $uibModalInstance, $resource, currentOrder) {

    $scope.order = currentOrder;
    $scope.status = [{key:'NOT_DELIVER', name:'未发货'},
                     {key:'HAS_DELIVER', name:'已发货'},
                     {key:'HAS_RECEIVED', name:'已签收'},
                     {key:'HAS_CLOSED', name:'已关闭'}];

    var url = '/NongKenShop/order/update.json';

    if (!isEditModel()) {
        $scope.user.isForbidden = false;
    }

    $scope.submit = function () {
        $resource(url).save($scope.order).$promise.then(
            function (ack) {
	            console.log(ack);
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
