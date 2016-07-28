module.exports = function ($stateParams, $scope, $uibModal, $timeout, $resource, $filter, NgTableParams) {

    var url = $resource('/NongKenShop/goods-category-type/get-category-types.json');
   
    $scope.tableParams = new NgTableParams({}, {
        total: 0,         
        getData: function (params) {
            return url.get(params.url()).$promise.then(function (body) {
                return body.data;
            });
        }
    });

    $scope.edit = function (categoryType) {
        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: require('file!../../widgets/addEditCategoryType/template.html'),
            controller: 'editCategoryType',
            scope: $scope,
            resolve: {
                method: function () {
                    return '编辑';
                },
                
                currentCategoryType: function() {
                    return angular.copy(categoryType);
                }
            }
        });
    };

    $scope.new = function () {
        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: require('file!../../widgets/addEditCategoryType/template.html'),
            controller: 'editCategoryType',
            scope: $scope,
            resolve: {
                method: function () {
                    return '新建';
                },
                currentCategoryType: function () {
                    var categoryType = {};
                    return angular.copy(categoryType);
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
            $resource('/NongKenShop/goods-category-type/delete.json').save(category).$promise.then(function (ack) {
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