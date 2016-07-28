module.exports = function ($scope, Upload, $uibModalInstance, $resource, NgTableParams, method, currentApplication, variableService, userService) {

    $scope.application = currentApplication;

    $scope.goodsCategory = variableService.getGoodsCategory();
    $scope.method = method;
    var url = '/NongKenShop/goods/add-goods.json';

    if (!isEditModel()) {
        $scope.application.merchant = {id: $scope.user.userInfo.id};
        $scope.application.category = {id: ''};
        // $scope.application.isDeleted = false;
    }

    $scope.submit = function (NgTableParams) {

        if (isEditModel()) {
            url = '/NongKenShop/goods/update-goods.json';
        }

        $scope.application.imageUrls = JSON.stringify($scope.application.imageUrls);

        $resource(url).save($scope.application).$promise.then(
            function (ack) {

            if (ack.respCode != '1000') {
                $scope.errorMsg = ack.respMsg;
                return;
            }
            
            $uibModalInstance.close();
            $scope.tableParams.page(1);
            $scope.tableParams.reload();
        });

    };

    $scope.deleteImg = function(index) {
        console.log(index);
        $scope.application.imageUrls.splice(index, 1);

    }

    $scope.upload = function(a, file, group) {
        console.log(a);
        $scope.showBtn = false;
        console.log(file);
        if (null == file) {
            return;
        }
        var fd = new FormData();
        fd.append('file', file);

        file.upload = Upload.http({
            url: '/NongKenShop/file/upload.json',
            method: 'POST',
            headers: {
                // 'Content-Type': file.type
                'Content-Type': undefined
            },
            data: fd
        });

        file.upload.then(function(response) {
            console.log(response);

            if (response.data && response.data.respCode != '1000') {

                alert(response.data.respMsg + response.data.content);
            } else {
                console.log(response.data.data);
                $scope.application.imageUrls.push(response.data.data);
                console.log( $scope.application.imageUrls)
                alert('上传成功！' + response.data.respMsg);
                $scope.tableParams.page(1);
                $scope.tableParams.reload();
            }

        }, function(response) {
            console.log(response);
        });

    };

    $scope.applicationInputClick = function () {
        $scope.errorMsg = '';
    };

    function isEditModel() {
        return $scope.application.id ? true : false;
    }

    $scope.cancle = function () {
        $uibModalInstance.close();
    };

}
