module.exports = function ($stateParams, $scope, $uibModal, $timeout, $resource, $filter, NgTableParams, variableService) {
    var myinfo = '/NongKenShop/merchant/myinfo.json';
    var userInfo = {id:$scope.user.userInfo.id};
    $resource(myinfo).save(userInfo).$promise.then(function (ack) {
    	if (ack.respCode != '1000') {
    		alert(ack.respMsg);
    		$scope.user = {};
    	} else {
    		$scope.user = ack.data;
    	}
    });
    

    $scope.changePassword = function(user) {
    	var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: require('file!../../widgets/changePassword/changePassword.html'),
            controller: 'changePasswordCtrl',
            scope: $scope,
            resolve: {
            	currentUser: function () {
                    return angular.copy(user);
                }
            }
        });
    }  
}