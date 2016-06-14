module.exports = function($scope, $uibModalInstance, $resource, method,
		currentUser) {

	$scope.user = currentUser;

	$scope.method = method;
	var url = '/NongKenShop/merchant/save.json';

	if (!isEditModel()) {
		$scope.user.isForbidden = true;
	}

	$scope.submit = function() {  
		console.log($scope.user);
		$resource(url).save($scope.user).$promise.then(function(ack) {
			console.log(ack);
			if (ack.respCode != '1000') {
				$scope.errorMsg = ack.respMsg;
				return;
			}

			$uibModalInstance.close();
			$scope.tableParams.page(1);
			$scope.tableParams.reload();
		});

	};

	$scope.userInputClick = function() {
		$scope.errorMsg = '';
	};

	function isEditModel() {
		return $scope.user.id ? true : false;
	}

	$scope.cancle = function() {
		$uibModalInstance.close();
	};

}
