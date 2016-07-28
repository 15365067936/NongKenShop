module.exports = function ($scope, $uibModalInstance, $resource, method, currentCategory) {

    $scope.category = currentCategory;

    $scope.method = method;
    var url = '/NongKenShop/goods-category/add.json';

    if (!isEditModel()) {
        $scope.user.isForbidden = false;
    }

    $scope.submit = function () {
        console.log($scope.category);
        if ($scope.method === '编辑') {
            url = '/NongKenShop/goods-category/update.json'
        }
        $resource(url).save($scope.category).$promise.then(
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
