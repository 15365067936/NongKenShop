module.exports = function ($stateParams, $uibModal, $rootScope, Upload, $resource, NgTableParams, variableService, userService) {
	$rootScope.details = [];
	var goodsId = $stateParams.goodsId;
	if (goodsId) {
		var goodsUrl = $resource('/NongKenShop/goods/get-current-goods.json?id=' + goodsId);
		goodsUrl.get(null).$promise.then(function (body) {
			$rootScope.application = body.data;
			if ($rootScope.application.categoryId) {
				$rootScope.getCategoryTypes();
			}
			
			$rootScope.application.imageUrls = JSON.parse(body.data.imageUrls);
        });
	} else {
		$rootScope.application = {imageUrls:[]};	
	}

    getCategorys();
    $rootScope.submit = function (NgTableParams) {
    	var url = '/NongKenShop/goods/add-goods.json';
        if (isEditModel()) {
            url = '/NongKenShop/goods/update-goods.json';
        }

        var params = angular.copy($rootScope.application);
        params.imageUrls = JSON.stringify(params.imageUrls);
        params.merchant = {id:$rootScope.user.userInfo.id};
        console.log(params);
        console.log(url);
        $resource(url).save(params).$promise.then(function (ack) {
            if (ack.respCode != '1000') {
                $rootScope.errorMsg = ack.respMsg;
                return false;
            }
            
            alert('编辑商品成功');
            if (!isEditModel()) {
            	window.location.href = window.location.href + ack.data.id;
            }
            
        });
    };

    $rootScope.deleteImg = function(index) {
        $rootScope.application.imageUrls.splice(index, 1);

    }

    $rootScope.upload = function(a, file, group) {
        $rootScope.showBtn = false;
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
            	
            	console.log($rootScope.application.imageUrls);
                $rootScope.application.imageUrls.push(response.data.data);
                alert('上传成功！' + response.data.respMsg);
            }

        }, function(response) {
            console.log(response);
        });

    };

    $rootScope.applicationInputClick = function () {
        $rootScope.errorMsg = '';
    };

    function isEditModel() {
        return $rootScope.application.id ? true : false;
    }

    $rootScope.getCategoryTypes = function() {
    	var categoryUrl = $resource('/NongKenShop/goods-category-type/get-category-types.json?goodsCategory.id=' + $rootScope.application.categoryId);
        categoryUrl.get(null).$promise.then(function (body) {
        	$rootScope.categoryTypes = [];
        	for (var i = 0;i < body.data.length;i++) {
        		var categoryType = {
        			id:body.data[i].id,
            		name:body.data[i].name	
        		}
        		$rootScope.categoryTypes.push(categoryType);
        		
        		if ($rootScope.application.categoryTypeId == categoryType.id) {
        			$rootScope.categoryType = categoryType;
        		}
        	}
        	
        });
    };
    
    
    function getCategorys() {
    	var categoryUrl = $resource('/NongKenShop/goods-category/get-categorys.json');
        categoryUrl.get(null).$promise.then(function (body) {
        	$rootScope.goodsCategorys = body.data;
        });
    };
    
    
    //商品详情

    var url = $resource('/NongKenShop/goods-detail/get-detail.json?goodsId=' + goodsId);
    
    $rootScope.tableParams = new NgTableParams({
    }, {
        total: 0,          
        getData: function (params) {
            return url.get(params.url()).$promise.then(function (body) {
                $rootScope.details = body.data
                addOneRowDetail();
                return;
            });
        }
    });
    
    $rootScope.save = function(detail) {
    	if (!goodsId) {
    		alert("请先添加商品");
    		return;
    	}
    	detail.goods = {
    			id:goodsId
    	};
    	var url = '/NongKenShop/goods-detail/add-detail.json';
    	$resource(url).save(detail).$promise.then(function (ack) {
    			console.log(ack);
                if (ack.respCode != '1000') {
                	alert(ack.respMsg);
                    return;
                }
            
                alert("新增详情成功");
                //addOneRowDetail();
                window.location.reload();
        });
    }
    
    $rootScope.edit = function(detail) {
    	console.log(detail);
    	detail.goods = {
    			id:goodsId
    	}
    	var url = '/NongKenShop/goods-detail/update-detail.json';
    	$resource(url).save(detail).$promise.then(function (ack) {
    			console.log(ack);
                if (ack.respCode != '1000') {
                	alert(ack.respMsg);
                    return;
                }
            
                alert("修改详情成功");
                window.location.reload();
            });
    	
    }
    
    $rootScope.delete = function (detail) {
        var modalInstance = $uibModal.open({
            animation: $rootScope.animationsEnabled,
            templateUrl: require('file!../../../widgets/confirmPopup/template.html'),
            controller: 'confirmPopupCtrl',
            scope: $rootScope,
            resolve: {
                message: function () {
                    return {body: '确认删除此详细商品？'};
                }
            }
        });

        modalInstance.result.then(function () {
            $resource('/NongKenShop/goods-detail/delete-detail.json').save({id: detail.id}).$promise.then(function (ack) {
                if (ack.respCode != '1000') {
                	alert(ack.respMsg);
                	return;
                }
                
                window.location.reload();
            });

        }, function () {
            console.log('Modal dismissed at: ' + new Date());
        });
    };
    
    var addOneRowDetail = function() {
    	if (!$rootScope.details) {
    		$rootScope.details = [];
    	}
    	var detail = {
    			number:0
    	};
    	$rootScope.details.push(detail);
    }
    
    $rootScope.adjustNumber = function(detail) {
    	var modalInstance = $uibModal.open({
            animation: $rootScope.animationsEnabled,
            templateUrl: require('file!../../../widgets/adjustNumber/template.html'),
            controller: 'adjustDetailNumber',
            scope: $rootScope,
            resolve: {
                currentDetail: function () {
                    return angular.copy(detail);
                }
            }
        });
    }
}
