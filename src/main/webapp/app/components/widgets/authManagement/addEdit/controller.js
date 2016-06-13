module.exports = function ($scope, $uibModalInstance, $resource, NgTableParams, params, method) {
    console.log(params);

    var url = 'user/sys/adduseroauth';

    $scope.postObj = {
        applicationId: params,
        userNo: params[1]
    };


    $scope.submit = function (user) {
        if (!user) {
            $scope.errorMsg = '参数不能为空!';
            return;
        } 

        $scope.postObj.userNo = user.userNumber;
        $uibModalInstance.close();
        console.log($scope.postObj);
        $resource(url).save($scope.postObj).$promise.then(
            function(ack) {
                console.log(ack);

                if (ack.respCode != '1000') {
                    alert('操作失败!' + ack.respMsg);
                }

                $scope.tableParams.page(1);
                $scope.tableParams.reload();

        });
   }

    $scope.cancle = function () {
        $uibModalInstance.close();
    };

    $scope.isEditModel = function () {

        if ('add' == method) {
            return false;
        } else if ('edit' == method) {
            return true;
        }

    }
}
