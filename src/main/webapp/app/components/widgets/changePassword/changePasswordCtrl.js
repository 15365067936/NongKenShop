module.exports = function ($scope, $uibModalInstance, $resource, currentUser) {

    $scope.user = currentUser;

   

    $scope.submit = function () {
        var url = '/NongKenShop/merchant/change-password.json?loginName=' + currentUser.loginName 
                  + '&oldPassword=' + $("#old-password").val()
                  + '&newPassword=' + $("#new-password").val();
        $resource(url).save(null).$promise.then(function (ack) {
            console.log(ack);

            if (ack.respCode != '1000') {
                alert(ack.respMsg);
                return;
            } else {
            	alert("密码修改成功");
            }
        });

    };

    $scope.checkNewPasswordClick = function () {
    	var newPassword = $("#new-password");
    	var checkNewPassword = $("#is-new-password");
    	if (newPassword.val() != checkNewPassword.val()) {
    		$scope.errorMsg = '两次输入新密码不一致';
    		return;
    	}
    	
        $scope.errorMsg = '';
    };
    
    $scope.newPasswordClick = function () {
    	var newPassword = $("#new-password");
    	var checkNewPassword = $("#is-new-password");
    	
    	if (newPassword.val().length < 8) {
    		$scope.errorMsg = '密码长度小于8位';
    		return;
    	}

        $scope.errorMsg = '';
    };
    
    $scope.olrPasswordClick = function () {
        $scope.errorMsg = '';
    };


    $scope.cancle = function () {
        $uibModalInstance.close();
    };

}
