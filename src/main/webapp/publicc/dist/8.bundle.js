webpackJsonp([8],{

/***/ 148:
/***/ function(module, exports, __webpack_require__) {

	var orderDetailCtrl = __webpack_require__(149);
	__webpack_require__(150);
	var mod = angular.module('app.orderDetailCtrl', []);
	mod.controller('orderDetailCtrl', ['$stateParams', '$rootScope', '$uibModal', '$timeout', '$resource', '$filter', 'ngTableParams', 'variableService' , 'userService', 'userService', orderDetailCtrl]);
	module.exports = mod;

/***/ },

/***/ 149:
/***/ function(module, exports) {

	module.exports = function ($stateParams, $scope, $uibModal, $timeout, $resource, $filter, NgTableParams, variableService, userService, $state) {

	//    $scope.channelList = variableService.getChannelList();
	    $scope.user = userService;
	    if($stateParams.order) {
	        $scope.order = JSON.parse($stateParams.order);
	    }

	    var url = $resource('/NongKenShop/order-detail/get.json?orderId=' + $scope.order.id);

	      
	    console.log($stateParams.order.id);
	    
	    if($stateParams.applicationId) {
	        $scope.filterField.id = $stateParams.applicationId;
	    }
	    
	    $scope.tableParams = new NgTableParams({
	        page: 1,           
	        count: 5
	    }, {
	        counts: [5, 10, 15],
	        paginationMaxBlocks: 9,
	        total: 0,          
	        getData: function (params) {
	            return url.get(params.url()).$promise.then(function (body) {
	            	console.log(body);
	                return body.data;
	            });
	        }
	    });


	}




/***/ },

/***/ 150:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(151);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(14)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/stylus-loader/index.js!./style.styl", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/stylus-loader/index.js!./style.styl");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 151:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports


	// module
	exports.push([module.id, ".re-pos {\n  position: relative;\n  top: 8px;\n}\n", ""]);

	// exports


/***/ }

});