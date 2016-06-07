module.exports = function ($scope, $uibModalInstance, method, currentUser) {

    $scope.user = currentuser;

    $scope.method = method;
    var url = '/user/sys/addapp';

    if (!isEditModel()) {
        $scope.user.channel = 'weixin';
        $scope.user.isActive = true;
        $scope.user.enableToken = false;
    }

    $scope.submit = function (NgTableParams) {

        if (!$scope.user.appName || !$scope.user.secretKey || !$scope.user.channel || !$scope.user.appId) {
            $scope.errorMsg = '参数不能为空!';
            return;
        }
        
        if (isEditModel()) {
            url = '/user/sys/updateapp';
        }

        $resource(url).save($scope.user).$promise.then(
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

    $scope.userInputClick = function () {
        $scope.errorMsg = '';
    };

    function isEditModel() {
        return $scope.user.id ? true : false;
    }

    $scope.cancle = function () {
        $uibModalInstance.close();
    };

}
