module.exports = function ($stateParams, $scope, $uibModal, $timeout, $resource, $filter, NgTableParams, variableService) {

    console.log($stateParams);
    $scope.channelList = variableService.getChannelList();
    
    if($stateParams.good) {
        $scope.good = JSON.parse($stateParams.good);
    }

    var url = $resource('/NongKenShop/goods-detail/get-detail.json?goodsId=' + $scope.good.id);
    
    $scope.tableParams = new NgTableParams({
    }, {
        total: 0,          
        getData: function (params) {
            return url.get(params.url()).$promise.then(function (body) {
                console.log(body);
                return body.data;
            });
        }
    });

    $scope.edit = function (application) {
        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: require('file!../../widgets/addEditDetailGoods/template.html'),
            controller: 'addEditDetailGoodsCtrl',
            scope: $scope,
            resolve: {
                method: function () {
                    return '编辑';
                },
                currentApplication: function () {
                    return angular.copy(application);
                }
            }
        });
    };

    $scope.new = function (application) {0
        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: require('file!../../widgets/addEditDetailGoods/template.html'),
            controller: 'addEditDetailGoodsCtrl',
            scope: $scope,
            resolve: {
                method: function () {
                    return '新建';
                },
                currentApplication: function () {
                    var application = {goods: {id: $scope.good.id}};
                    return angular.copy(application);
                }
            }
        });
    };

    $scope.delete = function (application) {
        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: require('file!../../widgets/confirmPopup/template.html'),
            controller: 'confirmPopupCtrl',
            scope: $scope,
            resolve: {
                message: function () {
                    return {body: '确认删除此详细商品？'};
                }
            }
        });

        modalInstance.result.then(function () {
            $resource('/NongKenShop/goods-detail/delete-detail.json').save({id: application.id}).$promise.then(function (ack) {
                console.log(ack.respCode);

                if (ack.respCode != '1000') {
                    console.log(ack.respMsg);
                }

                $scope.tableParams.page(1);
                $scope.tableParams.reload();
            });

        }, function () {
            console.log('Modal dismissed at: ' + new Date());
        });
    };

}


