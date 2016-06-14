// module.exports = function () {
module.exports = function ($stateParams, $scope, $uibModal, $timeout, $resource, $filter, NgTableParams) {

    var api = $resource('/oauthapplication/sys/queryapp');

    $scope.tableParams = new NgTableParams({
        page: 1,          
        count: 5,
        sorting: {
            create_at: 'desc'   
        }
    }, {
        counts: [10, 20, 50],
        paginationMaxBlocks: 9,
        total: 0,        
        getData: function (params) {
            console.log('in api');
            return api.get(params.url()).$promise.then(function (body) {
                params.total(body.total);
                console.log(body.data);
                return body.data;
            });
        }
    });

    $scope.edit = function (application) {
        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: require('file!../../widgets/oauthApplication/addEdit/template.html'),
            controller: 'addEditOauthApplicationCtrl',
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

    $scope.new = function (application) {
        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: require('file!../../widgets/oauthApplication/addEdit/template.html'),
            controller: 'addEditOauthApplicationCtrl',
            scope: $scope,
            resolve: {
                method: function () {
                    return '新建';
                },
                currentApplication: function () {
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
                    return {body: '确认删除此oauth应用？'};
                }
            }
        });

        modalInstance.result.then(function () {
            $resource('/oauthApplication/sys/deleteapp').save(application).$promise.then(function (ack) {
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


