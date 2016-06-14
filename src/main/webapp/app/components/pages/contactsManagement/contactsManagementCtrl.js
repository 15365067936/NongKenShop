module.exports = function ($rootScope, $stateParams, $scope, $uibModal, $timeout, $resource, $filter, NgTableParams, userService) {
    $scope.currentApp = userService.currentApp;
    $scope.delete = function (scope) {
        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: require('file!../../widgets/confirmPopup/template.html'),
            controller: 'confirmPopupCtrl',
            scope: $scope,
            resolve: {
                message: function () {
                    return {body: '确认删除此部门？'};
                }
            }
        });

        modalInstance.result.then(function () {
            var deleteDepartmentApi = $resource('/department/sys/deleteDepartment');
            deleteDepartmentApi.get({'id': scope.$modelValue.id, 'accessId': $scope.currentApp.userAccessId}, function(ack) {
                console.log(ack);

                if (ack.respCode != '1000') {
                    alert('操作失败!' + ack.content);
                }
                $scope.queryDepartment();

            })
        }, function () {
            console.log('Modal dismissed at: ' + new Date());
        });
    };

    $scope.rename = function (scope) {
        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: require('file!../../widgets/addEditDepartment/template.html'),
            controller: 'addEditDepartmentCtrl',
            scope: $scope,
            resolve: {
                method: function () {
                    return '重命名';
                },
                currentDepartment: function () {
                    return scope.$modelValue;
                }
            }
        });

        modalInstance.result.then(function (departmentObj) {
            var url = '/department/sys/updateDepartment?accessId=' + $scope.currentApp.userAccessId;
            $resource(url).save(departmentObj).$promise.then(
                function (ack) {

                if (ack.respCode != '1000') {
                    alert(ack.content);
                    return;
                }
                $scope.queryDepartment();

            });

        }, function () {
            console.log('Modal dismissed at: ' + new Date());
        });
    };

    $scope.newUser = function (scope) {

        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: require('file!../../widgets/addEditDepartmentUser/template.html'),
            controller: 'addEditDepartmentUserCtrl',
            scope: $scope,
            resolve: {
                method: function () {
                    return '添加成员';
                },
                currentObj: function () {
                    return scope.$modelValue;
                }
            }
        });


        modalInstance.result.then(function (departmentUser) {
            var url = '/department/sys/addDepartmentUser?accessId=' + $scope.currentApp.userAccessId;
            $resource(url).save(departmentUser).$promise.then(
                function (ack) {
                
                if (ack.respCode != '1000') {
                    alert(ack.content);
                    return;
                }
                $scope.tableParams.page(1);
                $scope.tableParams.reload();

            });
        }, function () {
            console.log('Modal dismissed at: ' + new Date());
        });
    };

    $scope.editUser = function (user) {
        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: require('file!../../widgets/addEditDepartmentUser/template.html'),
            controller: 'addEditDepartmentUserCtrl',
            scope: $scope,
            resolve: {
                method: function () {
                    return '编辑成员';
                },
                currentObj: function () {
                    return user;
                }
            }
        });

        modalInstance.result.then(function (departmentUser) {
            var url = '/department/sys/addDepartmentUser?accessId=' + $scope.currentApp.userAccessId;
            $resource(url).save(departmentUser).$promise.then(
                function (ack) {
                
                if (ack.respCode != '1000') {
                    alert(ack.content);
                    return;
                }
                $scope.tableParams.page(1);
                $scope.tableParams.reload();

            });
        }, function () {
            console.log('Modal dismissed at: ' + new Date());
        });
    };

    $scope.deleteUser = function (user) {
        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: require('file!../../widgets/confirmPopup/template.html'),
            controller: 'confirmPopupCtrl',
            scope: $scope,
            resolve: {
                message: function () {
                    return {body: '确认删除此部门成员？'};
                }
            }
        });

        modalInstance.result.then(function () {
            var deleteDepartmentUserApi = $resource('/department/sys/deleteDepartmentUser');
            deleteDepartmentUserApi.get({'userid': user.userid, 'accessId': '1'}, function(ack) {
                console.log(ack);

                if (ack.respCode != '1000') {
                    alert('操作失败!' + ack.content);
                }
                
                $scope.tableParams.page(1);
                $scope.tableParams.reload();

            })

        }, function () {
            console.log('Modal dismissed at: ' + new Date());
        });
    };
    

    $scope.newSubItem = function (scope) {

        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: require('file!../../widgets/addEditDepartment/template.html'),
            controller: 'addEditDepartmentCtrl',
            scope: $scope,
            resolve: {
                method: function () {
                    return '新增子部门';
                },
                currentDepartment: function () {
                    return scope.$modelValue;
                }
            }
        });

        modalInstance.result.then(function (departmentObj) {
            var url = '/department/sys/addDepartment?accessId=' + $scope.currentApp.userAccessId;
            $resource(url).save(departmentObj).$promise.then(
                function (ack) {

                if (ack.respCode != '1000') {
                    alert(ack.content);
                    return;
                }
                $scope.queryDepartment();

            });

        }, function () {
            console.log('Modal dismissed at: ' + new Date());
        });
   
    };

    $scope.newItem = function (scope) {

        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: require('file!../../widgets/addEditDepartment/template.html'),
            controller: 'addEditDepartmentCtrl',
            scope: $scope,
            resolve: {
                method: function () {
                    return '新增同级部门';
                },
                currentDepartment: function () {
                    return scope.$modelValue;
                }
            }
        });

        modalInstance.result.then(function (departmentObj) {
            var url = '/department/sys/addDepartment?accessId=' + $scope.currentApp.userAccessId;
            $resource(url).save(departmentObj).$promise.then(
                function (ack) {

                if (ack.respCode != '1000') {
                    alert(ack.content);
                    return;
                }
                $scope.queryDepartment();

            });

        }, function () {
            console.log('Modal dismissed at: ' + new Date());
        });
        
    };

    $scope.collapseAll = function () {
        $scope.$broadcast('collapseAll');
    };

    $scope.expandAll = function () {
        $scope.$broadcast('expandAll');
    };

    $scope.queryDepartment = function () {
        var queryDepartmentApi = $resource('/department/sys/queryDepartment');
        queryDepartmentApi.query({'id': '1', 'accessId': $scope.currentApp.userAccessId},
            function(data){
                $scope.data = data[0];
                $scope.departments = angular.copy(data[1]);
                $rootScope.departments = angular.copy(data[1]);
            },
            function(err){
                alert('ajax error!' + err);
            }
        );

    }
    
    $scope.getMemberList = function(departmentId) {

        var getMemberListApi = $resource('/department/sys/getMemberList');
        $scope.tableParams = new NgTableParams({
            page: 1,           
            count: 10,
            accessId: $scope.currentApp.userAccessId,
            department_id: departmentId,
            status: 0,
            fetch_child: 0
        }, {
            counts: [],
            paginationMaxBlocks: 9,
            total: 1,   
            getData: function (params) {
                return getMemberListApi.get(params.url()).$promise.then(function (data) {
                    var result = JSON.parse(data.content);
                    return result.userlist;
                });
            }
        });
    }

    $scope.getMemberList(1);
    $scope.queryDepartment();

}