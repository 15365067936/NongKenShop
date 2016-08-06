module.exports = function ($stateParams, $scope, $uibModal, $timeout, $resource, $filter, NgTableParams, variableService, userService, $state) {

//    $scope.channelList = variableService.getChannelList();
    $scope.user = userService;
    if($stateParams.order) {
        $scope.order = JSON.parse($stateParams.order);
    }

    var url = $resource('/NongKenShop/order-detail/get.json?orderId=' + $scope.order.id);

      
    console.log($stateParams.order.id);
    
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
            	console.log(body);
                return body.data;
            });
        }
    });


}


