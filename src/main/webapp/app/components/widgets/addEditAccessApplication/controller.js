module.exports = function ($scope, $uibModalInstance, $resource, NgTableParams, method, currentAccessApplication, variableService) {
    
    $scope.accessApplication = currentAccessApplication;
    $scope.channelList = variableService.getChannelList();
    $scope.method = method;
    var url = '/accessApplication/sys/addaccessapp';

    if (!isEditModel()) {
        $scope.accessApplication.isActive = true;
    }

    $scope.submit = function (NgTableParams) {

        if (!$scope.accessApplication.appName || !$scope.accessApplication.applicationId || !$scope.accessApplication.callback) {
            $scope.errorMsg = '参数不能为空!';
            return;
        }

        if (isEditModel()) {
            url = '/accessApplication/sys/updateaccessapp';
        }

        $resource(url).save($scope.accessApplication).$promise.then(
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

    $scope.accessApplicationInputClick = function () {
        $scope.errorMsg = '';
    };

    function isEditModel() {
        return $scope.accessApplication.id ? true : false;
    }

    $scope.cancle = function () {
        $uibModalInstance.close();
    };

}
