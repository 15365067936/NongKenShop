module.exports = function ($scope, $uibModalInstance, $resource, NgTableParams, params, method) {
    console.log(params);
    $scope.postObj = {
        applicationId: params[0],
        userNo: params[1]
    };
    var url = 'user/sys/deleteoauth';

    $scope.submit = function () {
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

}
