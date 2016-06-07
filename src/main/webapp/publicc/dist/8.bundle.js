webpackJsonp([8],{

/***/ 87:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "d8e2f1cb88c70130f1151a7fd5551272.html";

/***/ },

/***/ 95:
/***/ function(module, exports, __webpack_require__) {

	var controller = __webpack_require__(96);
	var mod = angular.module('app.confirmPopup', []);
	__webpack_require__(97);
	mod.controller('confirmPopupCtrl', ['$scope', '$uibModalInstance', 'message', controller]);
	module.exports = mod;

/***/ },

/***/ 96:
/***/ function(module, exports) {

	module.exports = function ($scope, $uibModalInstance, message) {

	    $scope.message = message;
	    
	    $scope.submit = function () {
	        $uibModalInstance.close();
	    };

	    $scope.cancle = function () {
	        $uibModalInstance.dismiss('cancel');
	    };

	}


/***/ },

/***/ 97:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(98);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(14)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./style.css", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./style.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 98:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports


	// module
	exports.push([module.id, ".cpp-button {\r\n    line-height: 38px;\r\n    display: inline-block;\r\n    font-size: 14px;\r\n    text-align: center;\r\n    cursor: pointer;\r\n    color: #545a6c;\r\n    border: 1px solid #d0d0d5;\r\n    border-color: rgba(0, 0, 0, .15);\r\n    border-radius: 4px;\r\n    padding: 0 16px;\r\n    min-width: 46px;\r\n    background-color: #fff;\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n    overflow: visible;\r\n    -ms-box-sizing: content-box;\r\n    box-sizing: content-box;\r\n    font-family: inherit\r\n}\r\n\r\n.cpp-button:hover {\r\n    color: #2d3441;\r\n    border-color: #a6a6a6;\r\n    text-decoration: none\r\n}\r\n\r\n.cpp-button:active {\r\n    background-color: #f5f5fa\r\n}\r\n\r\n.cpp-button-primary {\r\n    border: 1px solid #00a5e0;\r\n    background-color: #00a5e0;\r\n    color: #fff\r\n}\r\n\r\n.cpp-button-primary:hover {\r\n    background-color: #00b4f5;\r\n    border-color: #00b4f5;\r\n    color: #fff\r\n}\r\n\r\n.cpp-button-primary:active {\r\n    background-color: #0092c7;\r\n    border-color: #0092c7;\r\n    color: #fff\r\n}\r\n\r\ninput[type=search]::-webkit-search-cancel-button {\r\n    -webkit-appearance: none;\r\n    width: 20px;\r\n    height: 20px;\r\n    cursor: pointer\r\n}\r\n\r\ninput[type=search]::-webkit-search-cancel-button:hover {\r\n    background-position: 0 -20px\r\n}\r\n\r\n.cpp-panel {\r\n    -webkit-animation: tinydown .25s;\r\n    animation: tinydown .25s;\r\n    position: absolute;\r\n    border: 1px solid #ccc;\r\n    background-color: #f7fbfc;\r\n    border-radius: 2px;\r\n    box-shadow: 0 1px 6px rgba(0, 0, 0, .2);\r\n    left: 48%;\r\n    top: 100px;\r\n    -webkit-transition: 200ms opacity;\r\n    transition: 200ms opacity;\r\n    opacity: 1;\r\n    min-width: 400px\r\n}\r\n\r\n:root .cpp-panel {\r\n    border: 0\r\n}\r\n\r\n.cpp-panel-head {\r\n    line-height: 30px;\r\n    padding: 15px 50px 0 25px;\r\n    color: #545A6C;\r\n    font-size: 14px;\r\n    font-weight: 700;\r\n    font-family: \"Segoe UI\", Arial, \"Microsoft Yahei\", sans-serif;\r\n    cursor: default;\r\n    -webkit-user-select: none;\r\n    user-select: none\r\n}\r\n\r\n.cpp-panel-body {\r\n    padding: 10px 25px 20px;\r\n    min-height: 60px;\r\n}\r\n\r\n.cpp-panel-body:after {\r\n    content: '';\r\n    display: table;\r\n    clear: both\r\n}\r\n\r\n.cpp-panel-foot {\r\n    padding: 0 25px 25px;\r\n    text-align: right\r\n}\r\n\r\n.cpp-panel-foot .cpp-button {\r\n    margin-left: 15px\r\n}\r\n\r\n.cpp-panel-close {\r\n    position: absolute;\r\n    top: 18px;\r\n    right: 17px;\r\n    width: 20px;\r\n    height: 20px;\r\n    background: url(" + __webpack_require__(99) + ") no-repeat\r\n}\r\n\r\n.cpp-panel-close:hover {\r\n    background-position: 0 -20px\r\n}\r\n\r\n.panel-without-head .cpp-panel-head {\r\n    height: 20px;\r\n    margin-bottom: -35px;\r\n    position: relative\r\n}\r\n\r\n.panel-without-head .cpp-panel-close {\r\n    z-index: 10\r\n}\r\n\r\n.cpp-panel-remind {\r\n    padding: 45px 0 26px 60px;\r\n    background-repeat: no-repeat;\r\n    background-position: 0 50px;\r\n    background-size: 40px 40px;\r\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjQwMCIgaGVpZ2h0PSI0MDAiIHZpZXdCb3g9IjAgMCA0MDAgNDAwIj4NCjxwYXRoIGZpbGw9IiNGNDYxNUMiIGQ9Ik00MDAuNSwyMDAuNWMwLDExMC40NTctODkuNTQyLDE5OS45OTktMTk5Ljk5OSwxOTkuOTk5DQoJQzkwLjA0Myw0MDAuNDk5LDAuNSwzMTAuOTU3LDAuNSwyMDAuNSBNMC41LDIwMC41YzAtMTEwLjQ1OCw4OS41NDMtMjAwLDIwMC4wMDEtMjAwYzExMC40NTcsMCwxOTkuOTk5LDg5LjU0MiwxOTkuOTk5LDIwMCIvPg0KPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTE5NS41MDMsMTAwLjUwM2gxMGMyLjc2MSwwLDUsMi4yMzksNSw1djE1MGMwLDIuNzYxLTIuMjM5LDUtNSw1DQoJaC0xMGMtMi43NjEsMC01LTIuMjM5LTUtNXYtMTUwQzE5MC41MDMsMTAyLjc0MiwxOTIuNzQyLDEwMC41MDMsMTk1LjUwMywxMDAuNTAzeiIvPg0KPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTE5NS41MDMsMjgwLjUwMmgxMGMyLjc2MSwwLDUsMi4yMzgsNSw0Ljk5OXYyMC4wMDINCgljMCwyLjc2MS0yLjIzOSw1LTUsNWgtMTBjLTIuNzYxLDAtNS0yLjIzOS01LTV2LTIwLjAwMkMxOTAuNTAzLDI4Mi43NCwxOTIuNzQyLDI4MC41MDIsMTk1LjUwMywyODAuNTAyeiIvPg0KPC9zdmc+DQo=), none\r\n}\r\n\r\n.cpp-panel-remind {\r\n\r\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjQwMCIgaGVpZ2h0PSI0MDAiIHZpZXdCb3g9IjAgMCA0MDAgNDAwIj4NCjxwYXRoIGZpbGw9IiMwMEE1RTAiIGQ9Ik0yMDAuNTAxLDAuNWMxMTAuNDU3LDAsMTk5Ljk5OSw4OS41NDIsMTk5Ljk5OSwyMDANCgljMCwxMTAuNDU3LTg5LjU0MiwxOTkuOTk5LTE5OS45OTksMTk5Ljk5OUM5MC4wNDMsNDAwLjQ5OSwwLjUsMzEwLjk1NywwLjUsMjAwLjVDMC41LDkwLjA0Miw5MC4wNDMsMC41LDIwMC41MDEsMC41eiIvPg0KPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTE5NS41MDIsMTUwLjUwM2gxMC4wMDFjMi43NjEsMCw1LDIuMjM4LDUsNC45OTl2MTUwDQoJYzAsMi43NjItMi4yMzksNS01LDVoLTEwLjAwMWMtMi43NjIsMC01LTIuMjM4LTUtNXYtMTUwQzE5MC41MDIsMTUyLjc0MSwxOTIuNzQsMTUwLjUwMywxOTUuNTAyLDE1MC41MDN6Ii8+DQo8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMTk1LjUwMiwxMDAuNTAzaDEwLjAwMWMyLjc2MSwwLDUsMi4yMzgsNSw0Ljk5OXYyMC4wMDINCgljMCwyLjc2MS0yLjIzOSw1LTUsNWgtMTAuMDAxYy0yLjc2MiwwLTUtMi4yMzktNS01di0yMC4wMDJDMTkwLjUwMiwxMDIuNzQxLDE5Mi43NCwxMDAuNTAzLDE5NS41MDIsMTAwLjUwM3oiLz4NCjwvc3ZnPg0K), none\r\n}\r\n\r\n.cpp-panel-remind>h6 {\r\n    font-size: 16px\r\n}\r\n\r\n.cpp-panel-remind>h6+p {\r\n    width: 290px;\r\n    margin-top: 3px\r\n}\r\n\r\n.panel-inner-overlay {\r\n    position: absolute;\r\n    z-index: 11;\r\n    left: 0;\r\n    right: 0;\r\n    top: 0;\r\n    bottom: 0;\r\n    background: #fff;\r\n    opacity: 0;\r\n    filter: alpha(opacity=0);\r\n    display: none\r\n}\r\n\r\n.modal-content {\r\n    border: 0px;\r\n}\r\n", ""]);

	// exports


/***/ },

/***/ 99:
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAA8CAYAAABmdppWAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAc5JREFUeNrslbtKxFAQhjdhGzu32McQLGwExWJtbFIIsoKvoGuxK14eIKLEQtdXEBQrbWy0cC0U1kofYxtbLYz/gYkeJ3MuSpCAOfCTy8n5MpnJnD9I07RW5AhrBY/yA+v8xtX1fQOHC+gB2oSkJMfQLLS4MD89sgLpwUxjUIdBE6hL5y3o1PXJl9ABna9CR1AgwI6hM+cn0+jRsUtQNV4ZrCOlo27JrwS1wnyqrKCP2vUztG6C+QBVzqa06wnoUMvpj4C8AKZCeeUwsRRAz2kul1KEkQXWY5G2fSIckFSnbAkFUNA3aAa68QG+QHOOYu2YJoJqP6yAZfSUpZW1b55yftJPhWc+PQXzI1eEmZ9sqF0FiwMGUxvHNrVey/nJeGPOUzIowayeYmw9YXHOU6R0WHuZQWsumNfmAOhQswHlKZOAvf/qt6EIc57CC+UFFHIoFsoLKMBUzno+0FCARaZqCtC2T4SZp+xL1SToLnQneUplARXw3wAbWqeYdpWYOqWZm1GdwhSlX6MPBWw+0eaX+XoJyBfp0MTxMiNQWuyEuYAc6oT5AJWGGuwJCm3P/2mEheaw0CoX/h+OQ7fQniVXMTSAmnyu8pQSAj8EGAB+6iZ+Y3s0jwAAAABJRU5ErkJggg=="

/***/ },

/***/ 147:
/***/ function(module, exports, __webpack_require__) {

	var userListCtrl = __webpack_require__(148);
	__webpack_require__(150);
	__webpack_require__(152);
	__webpack_require__(95);
	var mod = angular.module('app.userList', ['app.editUser', 'app.confirmPopup']);
	mod.controller('userListCtrl', ['$stateParams', '$rootScope', '$uibModal', '$timeout', '$resource', '$filter', 'ngTableParams', 'variableService', userListCtrl]);
	module.exports = mod;

/***/ },

/***/ 148:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function ($stateParams, $scope, $uibModal, $timeout, $resource, $filter, NgTableParams, variableService) {

	    var Api = $resource('/user/sys/queryuser');
	    $scope.userTypeList = variableService.getUserTypeList();

	    if($stateParams.processId) {
	        $scope.searchFields.id = $stateParams.processId;
	    }
	    $scope.tableParams = new NgTableParams({
	        page: 1,           
	        count: 5,
	        sorting: {
	            is_fobidden: 'desc'   
	        }
	    }, {
	        counts: [10, 20, 50],
	        paginationMaxBlocks: 9,
	        total: 0,          
	        getData: function (params) {
	            console.log('in api');
	            return Api.get(params.url()).$promise.then(function (data) {
	                params.total(data.total);
	                return data.data;
	            });
	        }
	    });
	    $scope.new = function() {
	        var modalInstance = $uibModal.open({
	            animation: $scope.animationsEnabled,
	            templateUrl: __webpack_require__(149),
	            controller: 'editUserCtrl',
	            scope: $scope,
	            resolve: {
	                method: function () {

	                    return '添加';
	                },
	                currentUser: function () {

	                    return {};
	                }
	            }
	        });

	        modalInstance.result.then(function () {
	            $resource('/user/sys/adduser').save(User.id).$promise.then(function (ack) {
	                console.log(ack.respCode);
	                if (ack.respCode != '1000') {
	                    alert(ack.respMsg);
	                }
	                $scope.tableParams.page(1);
	                $scope.tableParams.reload();
	            });

	        }, function () {
	            console.log('Modal dismissed at: ' + new Date());
	        });

	    }

	    $scope.edit = function (User) {
	        var modalInstance = $uibModal.open({
	            animation: $scope.animationsEnabled,
	            templateUrl: __webpack_require__(149),
	            controller: 'editUserCtrl',
	            scope: $scope,
	            resolve: {
	                method: function () {
	                    return '编辑';
	                },
	                currentUser: function () {
	                    return angular.copy(User);
	                }
	            }
	        });

	        modalInstance.result.then(function () {
	            $resource('/user/sys/editUser').save(User.id).$promise.then(function (ack) {
	                console.log(ack.respCode);
	                if (ack.respCode != '1000') {
	                    alert(ack.respMsg);
	                }
	                $scope.tableParams.page(1);
	                $scope.tableParams.reload();
	            });

	        }, function () {
	            console.log('Modal dismissed at: ' + new Date());
	        });
	    };

	    $scope.delete = function (User) {
	        var modalInstance = $uibModal.open({
	            animation: $scope.animationsEnabled,
	            templateUrl: __webpack_require__(87),
	            controller: 'confirmPopupCtrl',
	            scope: $scope,
	            resolve: {
	                message: function () {
	                    return {body: '确认删除此用户？'};
	                }
	            }
	        });

	        modalInstance.result.then(function () {
	            $resource('/user/sys/deleteuser').save(User.id).$promise.then(function (ack) {
	                console.log(ack.respCode);
	                if (ack.respCode != '1000') {
	                    alert(ack.respMsg);
	                }
	                $scope.tableParams.page(1);
	                $scope.tableParams.reload();
	            });

	        }, function () {
	            console.log('Modal dismissed at: ' + new Date());
	        });
	    };

	           
	}




/***/ },

/***/ 149:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "a40b50f6eb742955e7953848709e3c8b.html";

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
	exports.push([module.id, "", ""]);

	// exports


/***/ },

/***/ 152:
/***/ function(module, exports, __webpack_require__) {

	var editUserCtrl = __webpack_require__(153);
	__webpack_require__(154);
	var mod = angular.module('app.editUser', []);
	mod.controller('editUserCtrl', ['$scope', '$uibModalInstance', 'method', 'currentUser', editUserCtrl]);
	module.exports = mod;

/***/ },

/***/ 153:
/***/ function(module, exports) {

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


/***/ },

/***/ 154:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(155);
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

/***/ 155:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports


	// module
	exports.push([module.id, ".big-checkbox {\n  width: 20px;\n  height: 20px;\n}\n.height-fixed {\n  overflow: auto;\n  height: 500px;\n}\n", ""]);

	// exports


/***/ }

});