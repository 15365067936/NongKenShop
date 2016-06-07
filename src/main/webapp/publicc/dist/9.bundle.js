webpackJsonp([9],{

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

/***/ 156:
/***/ function(module, exports, __webpack_require__) {

	var contactsManagementCtrl = __webpack_require__(157);
	__webpack_require__(160);
	__webpack_require__(162);
	__webpack_require__(95);
	__webpack_require__(164);
	var mod = angular.module('app.contactsManagement', ['app.addEditDepartment', 'app.confirmPopup', 'app.addEditDepartmentUser']);
	mod.controller('contactsManagementCtrl', ['$rootScope', '$stateParams', '$rootScope', '$uibModal', '$timeout', '$resource', '$filter', 'ngTableParams', 'userService', contactsManagementCtrl]);
	module.exports = mod;

/***/ },

/***/ 157:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function ($rootScope, $stateParams, $scope, $uibModal, $timeout, $resource, $filter, NgTableParams, userService) {
	    $scope.currentApp = userService.currentApp;
	    $scope.delete = function (scope) {
	        var modalInstance = $uibModal.open({
	            animation: $scope.animationsEnabled,
	            templateUrl: __webpack_require__(87),
	            controller: 'confirmPopupCtrl',
	            scope: $scope,
	            resolve: {
	                message: function () {
	                    return {body: '确认删除此部门？'};
	                }
	            }
	        });

	        modalInstance.result.then(function () {
	            var deleteDepartmentApi = $resource('/department/sys/deleteDepartment');
	            deleteDepartmentApi.get({'id': scope.$modelValue.id, 'accessId': $scope.currentApp.userAccessId}, function(ack) {
	                console.log(ack);

	                if (ack.respCode != '1000') {
	                    alert('操作失败!' + ack.content);
	                }
	                $scope.queryDepartment();

	            })
	        }, function () {
	            console.log('Modal dismissed at: ' + new Date());
	        });
	    };

	    $scope.rename = function (scope) {
	        var modalInstance = $uibModal.open({
	            animation: $scope.animationsEnabled,
	            templateUrl: __webpack_require__(158),
	            controller: 'addEditDepartmentCtrl',
	            scope: $scope,
	            resolve: {
	                method: function () {
	                    return '重命名';
	                },
	                currentDepartment: function () {
	                    return scope.$modelValue;
	                }
	            }
	        });

	        modalInstance.result.then(function (departmentObj) {
	            var url = '/department/sys/updateDepartment?accessId=' + $scope.currentApp.userAccessId;
	            $resource(url).save(departmentObj).$promise.then(
	                function (ack) {

	                if (ack.respCode != '1000') {
	                    alert(ack.content);
	                    return;
	                }
	                $scope.queryDepartment();

	            });

	        }, function () {
	            console.log('Modal dismissed at: ' + new Date());
	        });
	    };

	    $scope.newUser = function (scope) {

	        var modalInstance = $uibModal.open({
	            animation: $scope.animationsEnabled,
	            templateUrl: __webpack_require__(159),
	            controller: 'addEditDepartmentUserCtrl',
	            scope: $scope,
	            resolve: {
	                method: function () {
	                    return '添加成员';
	                },
	                currentObj: function () {
	                    return scope.$modelValue;
	                }
	            }
	        });


	        modalInstance.result.then(function (departmentUser) {
	            var url = '/department/sys/addDepartmentUser?accessId=' + $scope.currentApp.userAccessId;
	            $resource(url).save(departmentUser).$promise.then(
	                function (ack) {
	                
	                if (ack.respCode != '1000') {
	                    alert(ack.content);
	                    return;
	                }
	                $scope.tableParams.page(1);
	                $scope.tableParams.reload();

	            });
	        }, function () {
	            console.log('Modal dismissed at: ' + new Date());
	        });
	    };

	    $scope.editUser = function (user) {
	        var modalInstance = $uibModal.open({
	            animation: $scope.animationsEnabled,
	            templateUrl: __webpack_require__(159),
	            controller: 'addEditDepartmentUserCtrl',
	            scope: $scope,
	            resolve: {
	                method: function () {
	                    return '编辑成员';
	                },
	                currentObj: function () {
	                    return user;
	                }
	            }
	        });

	        modalInstance.result.then(function (departmentUser) {
	            var url = '/department/sys/addDepartmentUser?accessId=' + $scope.currentApp.userAccessId;
	            $resource(url).save(departmentUser).$promise.then(
	                function (ack) {
	                
	                if (ack.respCode != '1000') {
	                    alert(ack.content);
	                    return;
	                }
	                $scope.tableParams.page(1);
	                $scope.tableParams.reload();

	            });
	        }, function () {
	            console.log('Modal dismissed at: ' + new Date());
	        });
	    };

	    $scope.deleteUser = function (user) {
	        var modalInstance = $uibModal.open({
	            animation: $scope.animationsEnabled,
	            templateUrl: __webpack_require__(87),
	            controller: 'confirmPopupCtrl',
	            scope: $scope,
	            resolve: {
	                message: function () {
	                    return {body: '确认删除此部门成员？'};
	                }
	            }
	        });

	        modalInstance.result.then(function () {
	            var deleteDepartmentUserApi = $resource('/department/sys/deleteDepartmentUser');
	            deleteDepartmentUserApi.get({'userid': user.userid, 'accessId': '1'}, function(ack) {
	                console.log(ack);

	                if (ack.respCode != '1000') {
	                    alert('操作失败!' + ack.content);
	                }
	                
	                $scope.tableParams.page(1);
	                $scope.tableParams.reload();

	            })

	        }, function () {
	            console.log('Modal dismissed at: ' + new Date());
	        });
	    };
	    

	    $scope.newSubItem = function (scope) {

	        var modalInstance = $uibModal.open({
	            animation: $scope.animationsEnabled,
	            templateUrl: __webpack_require__(158),
	            controller: 'addEditDepartmentCtrl',
	            scope: $scope,
	            resolve: {
	                method: function () {
	                    return '新增子部门';
	                },
	                currentDepartment: function () {
	                    return scope.$modelValue;
	                }
	            }
	        });

	        modalInstance.result.then(function (departmentObj) {
	            var url = '/department/sys/addDepartment?accessId=' + $scope.currentApp.userAccessId;
	            $resource(url).save(departmentObj).$promise.then(
	                function (ack) {

	                if (ack.respCode != '1000') {
	                    alert(ack.content);
	                    return;
	                }
	                $scope.queryDepartment();

	            });

	        }, function () {
	            console.log('Modal dismissed at: ' + new Date());
	        });
	   
	    };

	    $scope.newItem = function (scope) {

	        var modalInstance = $uibModal.open({
	            animation: $scope.animationsEnabled,
	            templateUrl: __webpack_require__(158),
	            controller: 'addEditDepartmentCtrl',
	            scope: $scope,
	            resolve: {
	                method: function () {
	                    return '新增同级部门';
	                },
	                currentDepartment: function () {
	                    return scope.$modelValue;
	                }
	            }
	        });

	        modalInstance.result.then(function (departmentObj) {
	            var url = '/department/sys/addDepartment?accessId=' + $scope.currentApp.userAccessId;
	            $resource(url).save(departmentObj).$promise.then(
	                function (ack) {

	                if (ack.respCode != '1000') {
	                    alert(ack.content);
	                    return;
	                }
	                $scope.queryDepartment();

	            });

	        }, function () {
	            console.log('Modal dismissed at: ' + new Date());
	        });
	        
	    };

	    $scope.collapseAll = function () {
	        $scope.$broadcast('collapseAll');
	    };

	    $scope.expandAll = function () {
	        $scope.$broadcast('expandAll');
	    };

	    $scope.queryDepartment = function () {
	        var queryDepartmentApi = $resource('/department/sys/queryDepartment');
	        queryDepartmentApi.query({'id': '1', 'accessId': $scope.currentApp.userAccessId},
	            function(data){
	                $scope.data = data[0];
	                $scope.departments = angular.copy(data[1]);
	                $rootScope.departments = angular.copy(data[1]);
	            },
	            function(err){
	                alert('ajax error!' + err);
	            }
	        );

	    }
	    
	    $scope.getMemberList = function(departmentId) {

	        var getMemberListApi = $resource('/department/sys/getMemberList');
	        $scope.tableParams = new NgTableParams({
	            page: 1,           
	            count: 10,
	            accessId: $scope.currentApp.userAccessId,
	            department_id: departmentId,
	            status: 0,
	            fetch_child: 0
	        }, {
	            counts: [],
	            paginationMaxBlocks: 9,
	            total: 1,   
	            getData: function (params) {
	                return getMemberListApi.get(params.url()).$promise.then(function (data) {
	                    var result = JSON.parse(data.content);
	                    return result.userlist;
	                });
	            }
	        });
	    }

	    $scope.getMemberList(1);
	    $scope.queryDepartment();

	}

/***/ },

/***/ 158:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "f4ef89fe6871713bf5482effd2eb0566.html";

/***/ },

/***/ 159:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "76d30d0785a8ca4c1fe7532a2f733f0d.html";

/***/ },

/***/ 160:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(161);
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

/***/ 161:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports


	// module
	exports.push([module.id, "body {\n  color: #f00;\n  background-color: #fff;\n}\nli {\n  list-style: none;\n}\nspan {\n  display: inline-block;\n  cursor: pointer;\n}\na {\n  cursor: pointer;\n}\n.fixed-height {\n  overflow: auto;\n  height: 100%;\n}\n.container-fluid {\n  height: 100%;\n}\n", ""]);

	// exports


/***/ },

/***/ 162:
/***/ function(module, exports, __webpack_require__) {

	var controller = __webpack_require__(163);
	var mod = angular.module('app.addEditDepartment', []);
	mod.controller('addEditDepartmentCtrl', ['$scope', '$uibModalInstance', '$resource', 'ngTableParams', 'method', 'currentDepartment', controller]);
	module.exports = mod;

/***/ },

/***/ 163:
/***/ function(module, exports) {

	module.exports = function ($scope, $uibModalInstance, $resource, NgTableParams, method, currentDepartment) {
	    
	    var departmentObj = currentDepartment;
	    $scope.method = method;

	    if ('重命名' === method) {
	        $scope.departmentName = departmentObj.name;
	        delete departmentObj.children;
	    } else if ('新增子部门' === method) {
	        departmentObj.parentid = departmentObj.id;
	        delete departmentObj.children;
	        delete departmentObj.id;
	        delete departmentObj.order;

	    } else {
	        delete departmentObj.children;
	        delete departmentObj.id;
	        delete departmentObj.order;
	    }

	    // $scope.submit = function () {   

	    //     departmentObj.name = $scope.departmentName; 
	    //     url = url + '?accessId=1'
	     
	    //     $resource(url).save(departmentObj).$promise.then(
	    //         function (ack) {

	    //         if (ack.respCode != '1000') {
	    //             $scope.errorMsg = ack.content;
	    //             return;
	    //         }
	            
	    //         $uibModalInstance.close();
	    //         $scope.queryDepartment();

	    //     });

	    // };

	   //  $scope.userInputClick = function () {
	   //      $scope.errorMsg = '';
	   //  };

	   // function isEditModel() {
	   //      return $scope.user.id ? true : false;
	   //  }

	   //  $scope.cancle = function () {
	   //      $uibModalInstance.close();
	   //      $scope.queryDepartment();
	   //  };

	    $scope.submit = function () {
	        departmentObj.name = $scope.departmentName;
	        $uibModalInstance.close(departmentObj);
	    };

	    $scope.cancle = function () {
	        $uibModalInstance.dismiss('cancel');
	    };

	}


/***/ },

/***/ 164:
/***/ function(module, exports, __webpack_require__) {

	var controller = __webpack_require__(165);
	__webpack_require__(166);
	var mod = angular.module('app.addEditDepartmentUser', []);
	mod.controller('addEditDepartmentUserCtrl', ['$scope', '$uibModalInstance', '$resource', 'ngTableParams', 'method', 'currentObj', controller]);
	module.exports = mod;

/***/ },

/***/ 165:
/***/ function(module, exports) {

	module.exports = function ($scope, $uibModalInstance, $resource, NgTableParams, method, currentObj) {
	    
	    var departmentObj = currentObj;
	    $scope.method = method;
	    $scope.selectedDepartment = [];
	    $scope.departmentUser = {};
	    $scope.showDepartment = false;

	    if ('编辑成员' === method) {
	            $scope.departmentUser = currentObj;

	            for (var i in $scope.departmentUser.department) {
	                for (var j in $scope.departments) {
	                    if ($scope.departmentUser.department[i] == $scope.departments[j].id) {
	                        $scope.selectedDepartment.push($scope.departments[j]);
	                        continue;
	                    }
	                }
	            }

	        } else {
	            $scope.departmentUser.department = [];

	        };

	    $scope.submit = function () {

	        if (!$scope.departmentUser.userid || !$scope.departmentUser.name || !$scope.departmentUser.gender || !$scope.departmentUser.department.length) {
	            $scope.errorMsg = '参数不能为空!';
	            return;
	        } else if (!$scope.departmentUser.mobile && !$scope.departmentUser.weixinid && !$scope.departmentUser.email) {
	            $scope.errorMsg = '手机号、微信号、邮箱不能同时为空!';
	            return;
	        } else if (!$scope.departmentUser.weixinid && !$scope.departmentUser.email && $scope.departmentUser.mobile.length != 11) {
	            $scope.errorMsg = '手机号应该是11位数字!';
	            return;
	        } else if (!$scope.departmentUser.weixinid && !$scope.departmentUser.mobile && !checkEmail($scope.departmentUser.email)) {
	            $scope.errorMsg = '邮箱格式不正确!';
	            return;
	        }

	        $uibModalInstance.close($scope.departmentUser);

	    };

	    $scope.userInputClick = function () {
	        $scope.errorMsg = '';
	    };

	    $scope.deleteSelectedDepartment = function (department) {
	        console.log($scope.departmentUser.department);
	        $scope.selectedDepartment.remove(department);
	        $scope.departmentUser.department.remove(department.id)
	    };

	    $scope.setDepartmentId = function (department) {

	        if ($scope.selectedDepartment.indexOf(department) == -1) {
	            $scope.selectedDepartment.push(department);
	        }

	        if ($scope.departmentUser.department.indexOf(department.id) == -1) {
	            $scope.departmentUser.department.push(department.id);
	        }
	        
	    }

	    function isEditModel() {
	        return $scope.user.id ? true : false;
	    }

	    $scope.cancle = function () {
	        $uibModalInstance.dismiss('cancel');
	    };

	    Array.prototype.remove = function(val) {
	            var index = this.indexOf(val);
	            if (index > -1) {
	                this.splice(index, 1);
	            }
	    };

	    function checkEmail(str) {
	        var re = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;

	        if (re.test(str)) {
	            return true;
	        } else {
	            return false;
	        }
	    }

	}


/***/ },

/***/ 166:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(167);
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

/***/ 167:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports


	// module
	exports.push([module.id, ".middle-size-li {\n  display: inline;\n  list-style-type: none;\n  padding: 5px 10px;\n}\n.float-div {\n  position: absolute;\n  margin-left: 10px;\n  margin-top: 10px;\n  background: #fff;\n}\n.without-border {\n  border: 0px;\n  margin-bottom: 4px;\n}\n.without-border:focus {\n  border: 0px;\n}\n.ul-form-control {\n  width: 100%;\n  padding: 6px 12px;\n  font-size: 14px;\n  line-height: 1.42857143;\n  color: #555;\n  background-color: #fff;\n  background-image: none;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,0.075);\n  box-shadow: inset 0 1px 1px rgba(0,0,0,0.075);\n  -webkit-transition: border-color ease-in-out 0.15s, -webkit-box-shadow ease-in-out 0.15s;\n  -o-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n}\n.with-border {\n  border: 2px dotted #000;\n}\n", ""]);

	// exports


/***/ }

});