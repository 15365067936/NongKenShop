module.exports = function ($scope, $uibModalInstance, $resource, NgTableParams, method, currentApplication) {
    
    $scope.oauthApplication = currentApplication;

    if ('undefined' == typeof $scope.oauthApplication) {
            $scope.oauthApplication = {isActive: true, isTrustable: false}; 
        }

    

    $scope.method = method;

    var url = '/oauthApplication/sys/addapp';

    $scope.submit = function () {

        console.log($scope.oauthApplication);
        if (!$scope.oauthApplication.appName || !$scope.oauthApplication.applicationId || !$scope.oauthApplication.domain || !$scope.oauthApplication.aesSecret) {
            $scope.errorMsg = '参数不能为空!';
            return;
        }

        if (24 != $scope.oauthApplication.aesSecret.length) {
            $scope.errorMsg = '密钥长度应该是24位!';
            return;
        }
        
        $resource(url).save($scope.oauthApplication).$promise.then(
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

    $scope.oauthApplicationInputClick = function () {
        $scope.errorMsg = '';
    };

    function isEditModel() {
        return $scope.oauthApplication.id ? true : false;
    }

    $scope.cancle = function () {
        $uibModalInstance.close();
    };

    $scope.getKey = function() {
        $resource('/oauthApplication/sys/getaessecret').get().$promise.then(
            function (ack) {
                console.log(ack);
                
                if (ack.respCode != '1000') {
                    $scope.errorMsg = ack.respMsg;
                    return;
                }

                $scope.oauthApplication.aesSecret = ack.data;
        });
    }

    if (isEditModel()) {
            url = '/oauthApplication/sys/updateapp';
        } else {
            $scope.getKey();
        }

}
