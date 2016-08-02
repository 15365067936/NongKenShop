module.exports = function ($stateParams, $scope, $uibModal, $timeout, $resource, $filter, NgTableParams, variableService, userService) {

//    $scope.channelList = variableService.getChannelList();
    $scope.user = userService;

    if ($scope.user.userInfo.role !== 'admin') {
        var url = $resource('/NongKenShop/order/get-orders-page.json?loginName=' + $scope.user.userInfo.role);

    } else {
        var url = $resource('/NongKenShop/order/get-orders-page.json');

    }

    console.log($scope.user);
    
    if($stateParams.applicationId) {
        $scope.filterField.id = $stateParams.applicationId;
    }
    
    $scope.tableParams = new NgTableParams({
        page: 1,           
        count: 5
    }, {
        counts: [5, 10, 15],
        paginationMaxBlocks: 9,
        total: 0,          
        getData: function (params) {
            return url.get(params.url()).$promise.then(function (body) {
                return body.data.content;
            });
        }
    });


    $scope.edit = function (order) {
        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: require('file!../../widgets/editOrder/editOrder.html'),
            controller: 'editOrderCtrl',
            scope: $scope,
            resolve: {
                currentOrder: function () {
                    return angular.copy(order);
                }
            }
        });
    };

    $scope.delete = function (order) {
        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: require('file!../../widgets/confirmPopup/template.html'),
            controller: 'confirmPopupCtrl',
            scope: $scope,
            resolve: {
                message: function () {
                    return {body: '确认删除此商品？'};
                }
            }
        });

        modalInstance.result.then(function () {
            $resource('/NongKenShop/order/delete.json').save({id: order.id}).$promise.then(function (ack) {
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

