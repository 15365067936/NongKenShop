module.exports = function ($stateParams, Upload, $scope, $uibModal, $timeout, $resource, $filter, NgTableParams, variableService, userService) {

    $scope.channelList = variableService.getChannelList();
    $scope.user = userService;

    if ($scope.user.userInfo.role !== 'admin') {
        var url = $resource('/NongKenShop/goods/get-goods-page.json?loginName=' + $scope.user.userInfo.role);

    } else {
        var url = $resource('/NongKenShop/goods/get-goods-page.json');

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
                // params.total(body.data.content.length);
                var formatedData = [];
                if (body.data.content.length > 0) {
                    formatedData = formatData(body.data.content);
                }

                return formatedData;
            });
        }
    });

    function formatData(content) {
        angular.forEach(content, function(item,index) {
            console.log(item);
            console.log(index);
            content[index].imageUrls = JSON.parse(item.imageUrls) || [];

        });

        return content;
    }

    $scope.upload = function(a, file, group) {
        console.log(a);
        $scope.showBtn = false;
        console.log(file);
        if (null == file) {
            alert('文件为空！');
            return;
        }

        file.upload = Upload.http({
            url: '/weixin/sys/groups/upload?accessId=' + $scope.currentApp.userAccessId + '&to_groupid=' + group.id,
            method: 'POST',
            headers: {
                'Content-Type': file.type
            },
            data: file
        });

        file.upload.then(function(response) {
            console.log(response);

            if (response.data && response.data.respCode != '1000') {
                alert(response.data.respMsg + response.data.content);
            } else {
                alert('上传成功！' + response.data.respMsg);
                $scope.tableParams.page(1);
                $scope.tableParams.reload();
            }

        }, function(response) {
            console.log(response);
        });

    };

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

    $scope.upload = function(a, file, group) {
        $scope.showBtn = false;
        console.log(file);
        if (null == file) {
            alert('文件为空！');
            return;
        }

        file.upload = Upload.http({
            url: '/NongKenShop/goods/get-goods-page.json' + '&to_groupid=' + group.id,
            method: 'POST',
            headers: {
                'Content-Type': file.type
            },
            data: file
        });

        file.upload.then(function(response) {

            if (response.data && response.data.respCode != '1000') {
                alert(response.data.respMsg + response.data.content);
            } else {
                alert('上传成功！' + response.data.respMsg);
                $scope.tableParams.page(1);
                $scope.tableParams.reload();
            }

        }, function(response) {
            console.log(response);
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
                    return {body: '确认删除此商品？'};
                }
            }
        });

        modalInstance.result.then(function () {
            $resource('/NongKenShop/goods/delete-goods.json').save({id: application.id}).$promise.then(function (ack) {
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


