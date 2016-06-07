module.exports = function ($stateParams, $scope, $uibModal, $timeout, $resource, $filter, NgTableParams) {

    var url = $resource('/accessApplication/sys/queryaccessapp');
   
    $scope.tableParams = new NgTableParams({
        page: 1,          
        count: 5,
        sorting: {
            is_active: 'desc'   
        }
    }, {
        counts: [5, 10, 15],
        paginationMaxBlocks: 9,
        total: 0,         
        getData: function (params) {
            console.log('in api');
            return url.get(params.url()).$promise.then(function (data) {
                params.total(data.total);
                return data.data;
            });
        }
    });

    $scope.edit = function (application) {
        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: require('file!../../widgets/addEditAccessApplication/template.html'),
            controller: 'addEditAccessApplicationCtrl',
            scope: $scope,
            resolve: {
                method: function () {
                    return '编辑';
                },
                currentAccessApplication: function () {
                    return angular.copy(application);
                }
            }
        });
    };

    $scope.new = function () {
        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: require('file!../../widgets/addEditAccessApplication/template.html'),
            controller: 'addEditAccessApplicationCtrl',
            scope: $scope,
            resolve: {
                method: function () {
                    return '新建';
                },
                currentAccessApplication: function () {
                    var application = {};
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
                    return {body: '确认删除此第三方应用？'};
                }
            }
        });

        modalInstance.result.then(function () {
            $resource('/accessApplication/sys/deleteaccessapp').save(application).$promise.then(function (ack) {
                console.log(ack.respCode);

                if (ack.respCode != '1000') {
                    alert(ack.respMsg);
                }
                
                $scope.tableParams.page(1);
                $scope.tableParams.reload();
            });

        }, function () {
            console.log('Modal dismissed at: ' + new Date());
        });
    };

}