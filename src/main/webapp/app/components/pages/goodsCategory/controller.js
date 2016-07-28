module.exports = function ($stateParams, $scope, $uibModal, $timeout, $resource, $filter, NgTableParams) {

    var url = $resource('/NongKenShop/goods-category/get-categorys.json');
   
    $scope.tableParams = new NgTableParams({}, {
        total: 0,         
        getData: function (params) {
            return url.get(params.url()).$promise.then(function (body) {
            	return body.data;
            });
        }
    });

    $scope.edit = function (category) {
        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: require('file!../../widgets/addEditGoodsCategory/template.html'),
            controller: 'editCategory',
            scope: $scope,
            resolve: {
                method: function () {
                    return '编辑';
                },
                currentCategory: function () {
                    return angular.copy(category);
                }
            }
        });
    };

    $scope.new = function () {
        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: require('file!../../widgets/addEditGoodsCategory/template.html'),
            controller: 'editCategory',
            scope: $scope,
            resolve: {
                method: function () {
                    return '新建';
                },
                currentCategory: function () {
                    var category = {};
                    return angular.copy(category);
                }
            }
        });
    };

    $scope.delete = function (category) {
        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: require('file!../../widgets/confirmPopup/template.html'),
            controller: 'confirmPopupCtrl',
            scope: $scope,
            resolve: {
                message: function () {
                    return {body: '确认删除此第三方应用？'};
                }
            }
        });

        modalInstance.result.then(function () {
            $resource('/NongKenShop/goods-category/delete.json').save(category).$promise.then(function (ack) {
                console.log(ack.respCode);

                if (ack.respCode != '1000') {
                    alert(ack.respMsg);
                }
                
                $scope.tableParams.reload();
            });

        }, function () {
            console.log('Modal dismissed at: ' + new Date());
        });
    };

}