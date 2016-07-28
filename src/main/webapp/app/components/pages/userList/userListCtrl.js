module.exports = function ($stateParams, $scope, $uibModal, $timeout, $resource, $filter, NgTableParams, variableService) {

    var Api = $resource('/NongKenShop/merchant/get-merchants-page.json');
    $scope.userTypeList = variableService.getUserTypeList();

    if($stateParams.processId) {
        $scope.searchFields.id = $stateParams.processId;
    }
    $scope.tableParams = new NgTableParams({
        page: 1,           
        count: 5,
        sorting: {
            is_forbidden: 'desc'
        }
    }, {
        counts: [10, 20, 50],
        paginationMaxBlocks: 9,
        total: 0,          
        getData: function (params) {
            console.log('in api');
            return Api.get(params.url()).$promise.then(function (data) {
                console.log(data);
                params.total(data.data.content.length);
                return data.data.content;
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
    };
    
    $scope.resetPassword = function(user) {
    	 console.log($scope.categoryType);
         var url = '/NongKenShop/merchant/reset-password.json'
         $resource(url).save(user).$promise.then(
             function (ack) {
 	            console.log(ack);
 	            if (ack.respCode != '1000') {
 	                alert(ack.respMsg);
 	                return;
             } else {
            	 alert(ack.data);
             }
             
             $uibModalInstance.close();
             $scope.tableParams.page(1);
             $scope.tableParams.reload();
         });
    }

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
            $resource('/NongKenShop/merchant/delete.json').save({id: User.id}).$promise.then(function (ack) {
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