webpackJsonp([22],{

/***/ 176:
/*!***********************************************************!*\
  !*** ./app/components/pages/authManagement/edit/index.js ***!
  \***********************************************************/
/***/ function(module, exports, __webpack_require__) {

	var userListCtrl = __webpack_require__(/*! ./editCtrl.js */ 177);
	__webpack_require__(/*! ./style.styl */ 180);
	__webpack_require__(/*! widgets/authManagement/addEdit */ 182);
	__webpack_require__(/*! widgets/authManagement/delete */ 186);
	var mod = angular.module('app.authManagementEdit', ['app.addAuthUser', 'app.deleteAuthUser']);
	mod.controller('authManagementEditCtrl', ['$stateParams', '$rootScope', '$uibModal', '$timeout', '$resource', '$filter', 'ngTableParams', 'userService', userListCtrl]);
	module.exports = mod;

/***/ },

/***/ 177:
/*!**************************************************************!*\
  !*** ./app/components/pages/authManagement/edit/editCtrl.js ***!
  \**************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = function ($stateParams, $scope, $uibModal, $timeout, $resource, $filter, NgTableParams, userService) {
	
	    var queryApi = $resource('/user/sys/queryoauthuser');
	    $scope.currentApplication = userService.currentApp;
	    $scope.searchFields = {category: "", channel: ""};
	
	    $scope.tableParams = new NgTableParams({
	        page: 1,           
	        count: 5,
	        applicationId: $scope.currentApplication.id,
	        searchFields: $scope.searchFields,
	        sorting: {
	            is_active: 'desc'    
	        }
	    }, {
	        counts: [],
	        paginationMaxBlocks: 9,
	        total: 0,        
	        getData: function (params) {
	            console.log('in api');
	            return queryApi.get(params.url()).$promise.then(function (data) {
	                console.log(data);
	                params.total(data.total);
	                return data.data;
	            });
	        }
	    });
	
	    $scope.search = function () {
	        $scope.searchFields.category = $scope.category;
	        $scope.searchFields.channel = $scope.channel;
	        $scope.searchFields.name = $scope.name;
	        $scope.searchFields.id = $scope.id;
	        $scope.tableParams.page(1);
	        $scope.tableParams.reload();
	
	    };
	
	    $scope.resetSearch = function () {
	        $scope.category = '';
	        $scope.channel = '';
	        $scope.name = '';
	        $scope.id = '';
	        $scope.search();
	    };
	
	    $scope.new = function () {
	        console.log('in new');
	        var modalInstance = $uibModal.open({
	            animation: $scope.animationsEnabled,
	            templateUrl: __webpack_require__(/*! file!../../../widgets/authManagement/addEdit/template.html */ 178),
	            controller: 'addAuthUserCtrl',
	            scope: $scope,
	            resolve: {
	                params: function () {
	                    return $scope.currentApplication.id;
	                },
	                method: function () {
	                    return 'add';
	                }
	            }
	        });
	    };
	
	    $scope.delete = function (user) {
	        console.log('in delete');
	        var modalInstance = $uibModal.open({
	            animation: $scope.animationsEnabled,
	            templateUrl: __webpack_require__(/*! file!../../../widgets/authManagement/delete/template.html */ 179),
	            controller: 'deleteAuthUserCtrl',
	            scope: $scope,
	            resolve: {
	                params: function () {
	                    return [$scope.currentApplication.id, user.userNo];
	                },
	                method: function () {
	                    return 'delete';
	                }
	            }
	        });
	    };
	
	}
	
	


/***/ },

/***/ 178:
/*!*************************************************************************************!*\
  !*** ./~/file-loader!./app/components/widgets/authManagement/addEdit/template.html ***!
  \*************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "6bdbf475c1a1aa3fd3388d9344c41e3f.html";

/***/ },

/***/ 179:
/*!************************************************************************************!*\
  !*** ./~/file-loader!./app/components/widgets/authManagement/delete/template.html ***!
  \************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "ca696875f23417d98c11da87cd3cc8b4.html";

/***/ },

/***/ 180:
/*!*************************************************************!*\
  !*** ./app/components/pages/authManagement/edit/style.styl ***!
  \*************************************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../../../../../~/css-loader!./../../../../../~/stylus-loader!./style.styl */ 181);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../../../../~/style-loader/addStyles.js */ 14)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../node_modules/css-loader/index.js!./../../../../../node_modules/stylus-loader/index.js!./style.styl", function() {
				var newContent = require("!!./../../../../../node_modules/css-loader/index.js!./../../../../../node_modules/stylus-loader/index.js!./style.styl");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 181:
/*!**********************************************************************************************!*\
  !*** ./~/css-loader!./~/stylus-loader!./app/components/pages/authManagement/edit/style.styl ***!
  \**********************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../../../~/css-loader/lib/css-base.js */ 8)();
	// imports
	
	
	// module
	exports.push([module.id, ".js_mbodyr {\n  height: 399px;\n}\ntr {\n  cursor: pointer;\n}\n.middle-size-li {\n  display: inline;\n  list-style-type: none;\n  padding: 5px 10px;\n}\n.float-div {\n  position: absolute;\n  margin-left: 10px;\n  margin-top: 10px;\n  background: #fff;\n}\n.without-border {\n  border: 0px;\n  margin-bottom: 4px;\n}\n.without-border:focus {\n  border: 0px;\n}\n.ul-form-control {\n  width: 100%;\n  padding: 6px 12px;\n  font-size: 14px;\n  line-height: 1.42857143;\n  color: #555;\n  background-color: #fff;\n  background-image: none;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,0.075);\n  box-shadow: inset 0 1px 1px rgba(0,0,0,0.075);\n  -webkit-transition: border-color ease-in-out 0.15s, -webkit-box-shadow ease-in-out 0.15s;\n  -o-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n}\n.with-border {\n  border: 2px dotted #000;\n}\n.with-border:focus {\n  box-shadow: 10px 10px 5px #fff;\n}\nbody {\n  font: 14px/1.5 \"Helvetica Neue\", Helvetica Neue, Helvetica, Arial, Hiragino Sans GB, Microsoft Yahei, sans-serif;\n  -webkit-font-smoothing: antialiased;\n}\nbody,\nh6 {\n  margin: 0;\n}\nul {\n  margin: 0;\n  padding: 0;\n}\nli {\n  list-style: none;\n}\nh6 {\n  font-size: 100%;\n}\ninput {\n  font-family: \"Helvetica Neue\", Helvetica Neue, Helvetica, Arial, Heiti SC, Hiragino Sans GB, Microsoft Yahei, sans-serif;\n  font-size: inherit;\n  line-height: inherit;\n}\na {\n  cursor: pointer;\n  text-decoration: none;\n  color: #4a90e2;\n}\na:hover {\n  text-decoration: underline;\n}\n.js_select {\n  height: 441px;\n}\n.jstree-node .icon_folder_blue {\n  vertical-align: top;\n  top: 10px !important;\n  margin-right: 6px !important;\n}\n.token-input-list .input_text {\n  padding: 3px 5px 0;\n  height: auto;\n  line-height: normal;\n}\n.jstree-icon.jstree-ocl {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 10;\n}\nbody {\n  color: #222;\n}\nbody,\nhtml {\n  height: 100%;\n}\n.js_phead {\n  display: list-item;\n}\n.tab_bar {\n  border-top: 1px solid #e5e5e5;\n  padding: 0 10px;\n  height: 40px;\n  line-height: 40px;\n  border-bottom: 1px solid #e5e5e5;\n  color: #d8d8d8;\n}\n.tab_filetype_items {\n  overflow: hidden;\n}\n.tab_filetype_items li {\n  float: left;\n  padding: 0 10px;\n}\n.tab_filetype_items li a {\n  float: left;\n  padding: 0 10px;\n  color: #777;\n  height: 40px;\n  line-height: 40px;\n  -webkit-box-sizing: border-box;\n}\n.tab_filetype_items li {\n  text-decoration: none;\n  color: #4a90e2;\n}\n.tab_filetype_items li a.active {\n  border-bottom: 3px solid #4a90e2;\n  color: #222;\n}\n.btn {\n  display: inline-block;\n  height: 28px;\n  margin: 0;\n  padding: 0 10px;\n  min-width: 30px;\n  text-align: center;\n  font-size: 14px;\n  line-height: 28px;\n  color: #222;\n  border: 1px solid #c8c8c8;\n  border-radius: 2px;\n  background: -webkit-linear-gradient(top, #fdfdfd 0, #eff1f4 100%);\n  cursor: default;\n  -webkit-user-select: none;\n}\n.btn:hover {\n  text-decoration: none;\n  cursor: pointer;\n}\n.btn:active,\n.btn:focus {\n  background: -webkit-linear-gradient(top, #e7e7e7 0, #c6c6c6 100%);\n  outline: 0;\n  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.1) inset;\n}\n.btn_blue {\n  color: #fff;\n  background: -webkit-linear-gradient(top, #4a90e2 0, #4a90e2 100%);\n  border-color: #417fc8;\n}\n.btn_blue:disabled {\n  background-image: none;\n  background-color: #a9cdf7;\n  border-color: #6da9d7;\n  box-shadow: none;\n  color: #fff;\n}\n.icon {\n  display: inline-block;\n  width: 24px;\n  height: 24px;\n  background-repeat: no-repeat !important;\n}\n.icon_folder_blue {\n  width: 12px !important;\n  height: 11px !important;\n  background-position: -256px -64px !important;\n}\n.icon_close {\n  background-position: -27px -123px;\n  width: 25px;\n  height: 25px;\n}\n.input_text {\n  width: 240px;\n  height: 35px;\n  line-height: 20px;\n  padding: 4px 5px;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-radius: 3px;\n  resize: none;\n}\n.input_text:focus {\n  outline: 0;\n  border-color: #96c4ff;\n  box-shadow: 0 0 3px rgba(29,201,255,0.8);\n}\n.input_group_add {\n  vertical-align: middle;\n  padding: 2px;\n  height: 20px;\n  border: none;\n  line-height: 20px;\n  color: #777;\n  outline: 0;\n  cursor: pointer;\n}\n.input_group_add:focus {\n  outline: 0;\n}\n.tag_group-name {\n  font-size: 14px;\n  color: #777;\n  padding: 10px 20px;\n  font-weight: 400;\n}\n.tag_group {\n  padding: 10px 0;\n  position: relative;\n}\n.dialog_content_sendTo {\n  position: relative;\n  height: 495px;\n}\n.dialog_content_sendTo .token-input-list {\n  z-index: 800;\n  background-color: #fff;\n  width: 545px;\n  *max-height: 35px;\n  overflow: hidden;\n  overflow-y: auto;\n}\n.dialog_choose_items_org {\n  overflow: auto;\n  height: 399px;\n}\n.dialog_choose_items_org li a {\n  margin-right: 0;\n}\n.dialog_header {\n  cursor: move;\n  position: relative;\n  height: 44px;\n  line-height: 44px;\n  border-bottom: 1px solid #ccc;\n  overflow: hidden;\n  border-radius: 5px 5px 0 0;\n  background: -webkit-linear-gradient(top, #f3f3f3 0, #eee 100%);\n}\n.dialog_header .title {\n  display: block;\n  font-size: 16px;\n  font-weight: 400;\n  text-align: center;\n}\n.dialog_header .dialog_close {\n  position: absolute;\n  top: -5px;\n  right: 0;\n  margin-right: 15px;\n  margin-top: 10px;\n  cursor: pointer;\n}\n.dialog_content {\n  min-height: 120px;\n  position: relative;\n}\n.dialog_tool {\n  background-color: #fff;\n  border-top: 1px solid #e5e5e5;\n  overflow: hidden;\n  height: 50px;\n  border-radius: 0 0 5px 5px;\n  -webkit-border-radius: 0 0 5px 5px;\n}\n.dialog_tool .btn {\n  float: right;\n  text-align: center;\n  margin-top: 10px;\n  margin-right: 10px;\n}\n.video-js:-webkit-full-screen {\n  width: 100% !important;\n  height: 100% !important;\n}\n.mod-dropdown-select__secondary-list::-webkit-scrollbar {\n  width: 14px;\n}\n.mod-dropdown-select__secondary-list::-webkit-scrollbar-track {\n  background: #fff;\n}\n.mod-dropdown-select__secondary-list::-webkit-scrollbar-thumb {\n  background: rgba(215,214,210,0.7);\n  border: 3px solid #fff;\n  border-radius: 10px;\n}\n.mod-dropdown-select__list-content::-webkit-scrollbar {\n  width: 14px;\n}\n.mod-dropdown-select__list-content::-webkit-scrollbar-track {\n  background: #fff;\n}\n.mod-dropdown-select__list-content::-webkit-scrollbar-thumb {\n  background: rgba(215,214,210,0.7);\n  border: 3px solid #fff;\n  border-radius: 10px;\n}\nli,\nul {\n  list-style-type: none;\n}\n.mod-tree-people__input {\n  margin: 20px 40px;\n}\n.mod-tree-people__input .token-input-list {\n  height: auto;\n  width: 100% !important;\n  -webkit-box-sizing: border-box;\n}\n.mod-tree-people__box {\n  border-top: 1px solid #e5e5e5;\n  zoom: 1;\n  clear: both;\n  *zoom: 1;\n}\n.mod-tree-people__box:before {\n  content: '';\n  display: block;\n}\n.mod-tree-people__box:after {\n  content: '';\n  display: table;\n  clear: both;\n}\n.mod-tree-people__org-list {\n  width: 260px;\n  float: left;\n  overflow: auto;\n}\n.mod-tree-people__people-list {\n  margin-left: 260px;\n  height: 100%;\n  border-left: 1px solid #e5e5e5;\n  overflow-y: auto;\n}\n.red {\n  color: #da4a38;\n}\n.ui-ta-c {\n  text-align: center;\n}\n.ui-d-n {\n  display: none !important;\n}\n", ""]);
	
	// exports


/***/ },

/***/ 182:
/*!****************************************************************!*\
  !*** ./app/components/widgets/authManagement/addEdit/index.js ***!
  \****************************************************************/
/***/ function(module, exports, __webpack_require__) {

	var controller = __webpack_require__(/*! ./controller.js */ 183);
	__webpack_require__(/*! ./style.styl */ 184);
	var mod = angular.module('app.addAuthUser', []);
	mod.controller('addAuthUserCtrl', ['$scope', '$uibModalInstance', '$resource', 'ngTableParams', 'params', 'method', controller]);
	module.exports = mod;

/***/ },

/***/ 183:
/*!*********************************************************************!*\
  !*** ./app/components/widgets/authManagement/addEdit/controller.js ***!
  \*********************************************************************/
/***/ function(module, exports) {

	module.exports = function ($scope, $uibModalInstance, $resource, NgTableParams, params, method) {
	    console.log(params);
	
	    var url = 'user/sys/adduseroauth';
	
	    $scope.postObj = {
	        applicationId: params,
	        userNo: params[1]
	    };
	
	
	    $scope.submit = function (user) {
	        if (!user) {
	            $scope.errorMsg = '参数不能为空!';
	            return;
	        } 
	
	        $scope.postObj.userNo = user.userNumber;
	        $uibModalInstance.close();
	        console.log($scope.postObj);
	        $resource(url).save($scope.postObj).$promise.then(
	            function(ack) {
	                console.log(ack);
	
	                if (ack.respCode != '1000') {
	                    alert('操作失败!' + ack.respMsg);
	                }
	
	                $scope.tableParams.page(1);
	                $scope.tableParams.reload();
	
	        });
	   }
	
	    $scope.cancle = function () {
	        $uibModalInstance.close();
	    };
	
	    $scope.isEditModel = function () {
	
	        if ('add' == method) {
	            return false;
	        } else if ('edit' == method) {
	            return true;
	        }
	
	    }
	}


/***/ },

/***/ 184:
/*!******************************************************************!*\
  !*** ./app/components/widgets/authManagement/addEdit/style.styl ***!
  \******************************************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../../../../../~/css-loader!./../../../../../~/stylus-loader!./style.styl */ 185);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../../../../~/style-loader/addStyles.js */ 14)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../node_modules/css-loader/index.js!./../../../../../node_modules/stylus-loader/index.js!./style.styl", function() {
				var newContent = require("!!./../../../../../node_modules/css-loader/index.js!./../../../../../node_modules/stylus-loader/index.js!./style.styl");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 185:
/*!***************************************************************************************************!*\
  !*** ./~/css-loader!./~/stylus-loader!./app/components/widgets/authManagement/addEdit/style.styl ***!
  \***************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../../../~/css-loader/lib/css-base.js */ 8)();
	// imports
	
	
	// module
	exports.push([module.id, "", ""]);
	
	// exports


/***/ },

/***/ 186:
/*!***************************************************************!*\
  !*** ./app/components/widgets/authManagement/delete/index.js ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	var deleteUserCtrl = __webpack_require__(/*! ./controller.js */ 187);
	var mod = angular.module('app.deleteAuthUser', []);
	mod.controller('deleteAuthUserCtrl', ['$rootScope', '$uibModalInstance', '$resource', 'ngTableParams', 'params', 'method', deleteUserCtrl]);
	module.exports = mod;

/***/ },

/***/ 187:
/*!********************************************************************!*\
  !*** ./app/components/widgets/authManagement/delete/controller.js ***!
  \********************************************************************/
/***/ function(module, exports) {

	module.exports = function ($scope, $uibModalInstance, $resource, NgTableParams, params, method) {
	    console.log(params);
	    $scope.postObj = {
	        applicationId: params[0],
	        userNo: params[1]
	    };
	    var url = 'user/sys/deleteoauth';
	
	    $scope.submit = function () {
	        $uibModalInstance.close();
	        console.log($scope.postObj);
	        $resource(url).save($scope.postObj).$promise.then(
	            function(ack) {
	                console.log(ack);
	
	                if (ack.respCode != '1000') {
	                    alert('操作失败!' + ack.respMsg);
	                }
	
	                $scope.tableParams.page(1);
	                $scope.tableParams.reload();
	
	        });
	   }
	
	    $scope.cancle = function () {
	        $uibModalInstance.close();
	    };
	
	}


/***/ }

});
//# sourceMappingURL=22.bundle.js.map