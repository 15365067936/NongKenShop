module.exports = function ($stateParams, $scope, $uibModal, $timeout, $resource, $filter, NgTableParams, variableService) {

    var Api = $resource('/user/sys/queryuser');
    $scope.userTypeList = variableService.getUserTypeList();

    if($stateParams.processId) {
        $scope.searchFields.id = $stateParams.processId;
    }
    $scope.tableParams = new NgTableParams({
        page: 1,           
        count: 5,
        sorting: {
            is_fobidden: 'desc'   
        }
    }, {
        counts: [10, 20, 50],
        paginationMaxBlocks: 9,
        total: 0,          
        getData: function (params) {
            console.log('in api');
            return Api.get(params.url()).$promise.then(function (data) {
                params.total(data.total);
                return data.data;
            });
        }
    });
    $scope.new = function() {
        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: require('file!../../widgets/editUser/template.html'),
            controller: 'editUserCtrl',
            scope: $scope,
            resolve: {
                method: function () {

                    return '添加';
                },
                currentUser: function () {

                    return {};
                }
            }
        });

        modalInstance.result.then(function () {
            $resource('/user/sys/adduser').save(User.id).$promise.then(function (ack) {
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

    }

    $scope.edit = function (User) {
        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: require('file!../../widgets/editUser/template.html'),
            controller: 'editUserCtrl',
            scope: $scope,
            resolve: {
                method: function () {
                    return '编辑';
                },
                currentUser: function () {
                    return angular.copy(User);
                }
            }
        });

        modalInstance.result.then(function () {
            $resource('/user/sys/editUser').save(User.id).$promise.then(function (ack) {
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

    $scope.delete = function (User) {
        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: require('file!../../widgets/confirmPopup/template.html'),
            controller: 'confirmPopupCtrl',
            scope: $scope,
            resolve: {
                message: function () {
                    return {body: '确认删除此用户？'};
                }
            }
        });

        modalInstance.result.then(function () {
            $resource('/user/sys/deleteuser').save(User.id).$promise.then(function (ack) {
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


