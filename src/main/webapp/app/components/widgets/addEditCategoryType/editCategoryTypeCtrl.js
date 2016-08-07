module.exports = function ($scope, $uibModalInstance, $resource, method, currentCategoryType) {

    $scope.categoryType = currentCategoryType;
    console.log($scope.categoryType);

    $scope.method = method;
    var url = '/NongKenShop/goods-category-type/add.json';

    if (!isEditModel()) {
        $scope.user.isForbidden = false;
    }

    $scope.submit = function () {
        $scope.categoryType.goodsCategory = {id:$scope.categoryType.goodsCategory.id};
        console.log($scope.categoryType);
        if ($scope.method === '编辑') {
            url = '/NongKenShop/goods-category-type/update.json';
        }
        $resource(url).save($scope.categoryType).$promise.then(
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
