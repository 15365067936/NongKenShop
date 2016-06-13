module.exports = function ($stateParams, $scope, $uibModal, $timeout, $resource, $filter, NgTableParams, userService) {

    var queryApi = $resource('/user/sys/queryoauthuser');
    $scope.currentApplication = userService.currentApp;
    $scope.searchFields = {category: "", channel: ""};

    $scope.tableParams = new NgTableParams({
        page: 1,           
        count: 5,
        applicationId: $scope.currentApplication.id,
        searchFields: $scope.searchFields,
        sorting: {
            is_active: 'desc'    
        }
    }, {
        counts: [],
        paginationMaxBlocks: 9,
        total: 0,        
        getData: function (params) {
            console.log('in api');
            return queryApi.get(params.url()).$promise.then(function (data) {
                console.log(data);
                params.total(data.total);
                return data.data;
            });
        }
    });

    $scope.search = function () {
        $scope.searchFields.category = $scope.category;
        $scope.searchFields.channel = $scope.channel;
        $scope.searchFields.name = $scope.name;
        $scope.searchFields.id = $scope.id;
        $scope.tableParams.page(1);
        $scope.tableParams.reload();

    };

    $scope.resetSearch = function () {
        $scope.category = '';
        $scope.channel = '';
        $scope.name = '';
        $scope.id = '';
        $scope.search();
    };

    $scope.new = function () {
        console.log('in new');
        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: require('file!../../../widgets/authManagement/addEdit/template.html'),
            controller: 'addAuthUserCtrl',
            scope: $scope,
            resolve: {
                params: function () {
                    return $scope.currentApplication.id;
                },
                method: function () {
                    return 'add';
                }
            }
        });
    };

    $scope.delete = function (user) {
        console.log('in delete');
        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: require('file!../../../widgets/authManagement/delete/template.html'),
            controller: 'deleteAuthUserCtrl',
            scope: $scope,
            resolve: {
                params: function () {
                    return [$scope.currentApplication.id, user.userNo];
                },
                method: function () {
                    return 'delete';
                }
            }
        });
    };

}


