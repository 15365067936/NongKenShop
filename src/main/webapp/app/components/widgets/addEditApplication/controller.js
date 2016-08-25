module.exports = function ($scope, Upload, $uibModalInstance, $resource, NgTableParams, method, currentApplication, variableService, userService) {
	$scope.application = currentApplication;
    getCategorys();
    if ($scope.application.categoryId) {
    	$scope.categoryTypes = [{
    			id:$scope.application.categoryType.id,
    			name:$scope.application.categoryType.name
    	}]
    }
    
    if (!$scope.application.imageUrls) {
		$scope.application.imageUrls = [];
	}
	

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
        
        //$scope.application.imageUrls = JSON.stringify($scope.application.imageUrls);
         
        var params = {
        		categoryId: $scope.application.categoryId,
        		categoryTypeId: $scope.application.categoryTypeId,
        		imageUrls:JSON.stringify($scope.application.imageUrls),
        		merchant:{id:$scope.application.merchant.id},
        		name: $scope.application.name,
        		origin:$scope.application.origin
        }
       
        $resource(url).save(params).$promise.then(function (ack) {

            if (ack.respCode != '1000') {
                $scope.errorMsg = ack.respMsg;
                return false;
            }
            
            $uibModalInstance.close();
            $scope.tableParams.page(1);
            $scope.tableParams.reload();
        });

    };

    $scope.deleteImg = function(index) {
        $scope.application.imageUrls.splice(index, 1);

    }

    $scope.upload = function(a, file, group) {
        $scope.showBtn = false;
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

            if (response.data && response.data.respCode != '1000') {

                alert(response.data.respMsg + response.data.content);
            } else {
            	
            	console.log($scope.application.imageUrls);
                $scope.application.imageUrls.push(response.data.data);
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
    
    
    $scope.getCategoryTypes = function() {
    	var categoryUrl = $resource('/NongKenShop/goods-category-type/get-category-types.json?goodsCategory.id=' + $scope.application.categoryId);
        categoryUrl.get(null).$promise.then(function (body) {
        	$scope.categoryTypes = body.data;
        });
    };
    
    
    function getCategorys() {
    	var categoryUrl = $resource('/NongKenShop/goods-category/get-categorys.json');
        categoryUrl.get(null).$promise.then(function (body) {
        	$scope.goodsCategorys = body.data;
        });
    };


}
