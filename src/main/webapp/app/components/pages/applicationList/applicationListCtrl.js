module.exports = function ($stateParams, $scope, $uibModal, $timeout, $resource, $filter, NgTableParams, variableService) {

    var url = $resource('/merchant/get-merchants-page.json');
    $scope.filterField = {app_id: '', channel: '', id: ''};
    $scope.channelList = variableService.getChannelList();
    
    if($stateParams.applicationId) {
        $scope.filterField.id = $stateParams.applicationId;
    }
    $scope.tableParams = new NgTableParams({
        page: 1,           
        count: 5,
        filter: $scope.filterField,
        sorting: {
            create_at: 'desc'     
        }
    }, {
        counts: [5, 10, 15],
        paginationMaxBlocks: 9,
        total: 0,          
        getData: function (params) {
            return url.get(params.url()).$promise.then(function (body) {
                params.total(body.total);
                return body.data;
            });
        }
    });

    $scope.edit = function (application) {
        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: require('file!../../widgets/addEditApplication/template.html'),
            controller: 'addEditApplicationCtrl',
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
            templateUrl: require('file!../../widgets/addEditApplication/template.html'),
            controller: 'addEditApplicationCtrl',
            scope: $scope,
            resolve: {
                method: function () {
                    return '新建';
                },
                currentApplication: function () {
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
                    return {body: '确认删除此应用？'};
                }
            }
        });

        modalInstance.result.then(function () {
            $resource('/application/sys/deleteapp').save(application).$promise.then(function (ack) {
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


