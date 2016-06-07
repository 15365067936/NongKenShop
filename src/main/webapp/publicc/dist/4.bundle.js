webpackJsonp([4],{

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

/***/ 109:
/***/ function(module, exports, __webpack_require__) {

	var controller = __webpack_require__(110);
	__webpack_require__(114);
	__webpack_require__(116);
	__webpack_require__(95);
	__webpack_require__(118);
	__webpack_require__(122);
	var mod = angular.module('app.tagManagement', ['app.addEditTag', 'app.confirmPopup', 'app.addTagUser', 'app.deleteTagUser']);
	mod.controller('tagManagementCtrl', ['$rootScope', '$stateParams', '$scope', '$uibModal', '$timeout', '$resource', '$filter', 'ngTableParams', controller]);
	module.exports = mod;

/***/ },

/***/ 110:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function ($rootScope, $stateParams, $scope, $uibModal, $timeout, $resource, $filter, NgTableParams) {
	    $scope.data = {};
	    $scope.deleteTag = function (tag) {

	        var modalInstance = $uibModal.open({
	            animation: $scope.animationsEnabled,
	            templateUrl: __webpack_require__(87),
	            controller: 'confirmPopupCtrl',
	            scope: $scope,
	            resolve: {
	                message: function () {
	                    return {body: '确认删除此标签？'};
	                }
	            }
	        });

	        modalInstance.result.then(function () {
	            var deleteTagApi = $resource('/tag/sys/deleteTag');
	            deleteTagApi.get({'tagid': tag.$modelValue.tagid, 'accessId': '1'},
	            function(ack){
	                console.log(ack);

	                if (ack.respCode != '1000') {
	                    alert('操作失败!' + ack.content);
	                }

	            })

	        }, function () {
	            console.log('Modal dismissed at: ' + new Date());
	        });
	    };

	    $scope.renameTag = function (scope) {
	        console.log(scope);
	        console.log('in rename');
	        var modalInstance = $uibModal.open({
	            animation: $scope.animationsEnabled,
	            templateUrl: __webpack_require__(111),
	            controller: 'addEditTagCtrl',
	            scope: $scope,
	            resolve: {
	                method: function () {
	                    return '重命名';
	                },
	                currentTag: function () {
	                    return scope.$modelValue;
	                }
	            }
	        });
	    };

	    $scope.newTagUser = function () {
	        if ('undefined' == $scope.currentTagId) {
	            alert("清先选择一个标签！");
	            return;
	        }
	        var modalInstance = $uibModal.open({
	            animation: $scope.animationsEnabled,
	            templateUrl: __webpack_require__(112),
	            controller: 'addTagUserCtrl',
	            scope: $scope,
	            resolve: {
	                method: function () {
	                    return '添加标签成员';
	                }
	            }
	        });
	    };

	    $scope.deleteTagUser = function (member) {
	        var modalInstance = $uibModal.open({
	            animation: $scope.animationsEnabled,
	            templateUrl: __webpack_require__(113),
	            controller: 'deleteTagUserCtrl',
	            scope: $scope,
	            resolve: {
	                currentUser: function () {
	                    return member;
	                }
	            }
	        });

	    };

	    $scope.newTag = function () {
	        var modalInstance = $uibModal.open({
	            animation: $scope.animationsEnabled,
	            templateUrl: __webpack_require__(111),
	            controller: 'addEditTagCtrl',
	            scope: $scope,
	            resolve: {
	                method: function () {
	                    return '新增标签';
	                },
	                currentTag: function () {
	                    return {};
	                }
	            }
	        });   
	    };

	    $scope.collapseAll = function () {
	        $scope.$broadcast('collapseAll');
	    };

	    $scope.expandAll = function () {
	        $scope.$broadcast('expandAll');
	    };

	    $scope.queryTag = function () {
	        var queryTagApi = $resource('/tag/sys/queryTag');
	        queryTagApi.query({'accessId': '1'},
	            function(data){
	                console.log('the data is: ',data); 
	                $scope.data = data;

	            },
	            function(err){
	                alert('ajax error!' + err);
	            }
	        );

	    }

	    $scope.getTagMemberList = function(tagId) {

	        $scope.currentTagId = tagId;
	        var getTagMemberListApi = $resource('/tag/sys/getTagMemberList');
	        $scope.tagTableParams = new NgTableParams({
	            page: 1,           
	            count: 10,
	            accessId: 1,
	            tagid: tagId,
	        }, {
	            counts: [],
	            paginationMaxBlocks: 9,
	            total: 1,   
	            getData: function (params) {
	                console.log('in api');
	                return getTagMemberListApi.get(params.url()).$promise.then(function (data) {
	                    var result = JSON.parse(data.content);
	                    return formatTagMemberList(result);
	                });
	            }
	        });
	    }

	    function getDepartmentName(id) {
	        for (var i in $rootScope.departments) {
	            if (id == $rootScope.departments[i].id) {
	                return $rootScope.departments[i].name;
	            }
	        }
	    };
	    
	    function formatTagMemberList(data) {
	        var memberList = [];
	        var member = {name: '', type: '', id: ''};
	        for (var i = 0; i < data.partylist.length; i++) {
	            member.name = getDepartmentName(data.partylist[i]);
	            member.type = '组织架构';
	            member.id = data.partylist[i];
	            memberList.push(angular.copy(member));
	        }

	        for (var j = 0; j < data.userlist.length; j++) {
	            member.name = data.userlist[j].name;
	            member.type = '成员';
	            member.id = data.userlist[j].userid;
	            memberList.push(angular.copy(member));
	        }

	        return memberList;
	    };

	    $scope.queryTag();

	}




/***/ },

/***/ 111:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "0470ce5bb8939495087a2480c15151a1.html";

/***/ },

/***/ 112:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "7b424d0ce008e6d780762fee6294c724.html";

/***/ },

/***/ 113:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "453b84bbde4822c4f9f1a82574d64ded.html";

/***/ },

/***/ 114:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(115);
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

/***/ 115:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports


	// module
	exports.push([module.id, "body {\n  color: #f00;\n  background-color: #fff;\n}\nli {\n  list-style: none;\n}\nspan {\n  display: inline-block;\n  cursor: pointer;\n}\na {\n  cursor: pointer;\n}\n.fixed-height {\n  overflow: auto;\n  height: 100%;\n}\n.container-fluid {\n  height: 100%;\n}\n", ""]);

	// exports


/***/ },

/***/ 116:
/***/ function(module, exports, __webpack_require__) {

	var controller = __webpack_require__(117);
	var mod = angular.module('app.addEditTag', []);
	mod.controller('addEditTagCtrl', ['$scope', '$uibModalInstance', '$resource', 'ngTableParams', 'method', 'currentTag', controller]);
	module.exports = mod;

/***/ },

/***/ 117:
/***/ function(module, exports) {

	module.exports = function ($scope, $uibModalInstance, $resource, NgTableParams, method, currentTag) {
	    
	    var tagObj = currentTag;
	    $scope.method = method;

	    if ('重命名' === method) {
	        var url = '/tag/sys/updateTag';
	        $scope.tagName = tagObj.tagname;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
	    }  else {
	        var url = '/tag/sys/addTag';
	        tagObj = {tagid: '', tagname: ''};
	        
	    }

	    url = url + '?accessId=1';

	    $scope.submit = function () {  

	        if (!$scope.tagName || ($scope.tagName.length > 32)) {
	            $scope.errorMsg = '参数非法!';
	            return; 
	        } 

	        tagObj.tagname = $scope.tagName; 

	        $resource(url).save(tagObj).$promise.then(
	            function (ack) {

	            if (ack.respCode != '1000') {
	                $scope.errorMsg = ack.content;
	                return;
	            }
	            
	            $scope.queryTag();
	            $uibModalInstance.close();

	        });

	    };

	    $scope.userInputClick = function () {
	        $scope.errorMsg = '';
	    };

	    $scope.cancle = function () {
	        $uibModalInstance.close();
	        $scope.queryTag();
	    };

	}


/***/ },

/***/ 118:
/***/ function(module, exports, __webpack_require__) {

	var controller = __webpack_require__(119);
	__webpack_require__(120);
	var mod = angular.module('app.addTagUser', []);
	mod.controller('addTagUserCtrl', ['$scope', '$uibModalInstance', '$resource', 'ngTableParams', 'method', controller]);
	module.exports = mod;

/***/ },

/***/ 119:
/***/ function(module, exports) {

	module.exports = function ($scope, $uibModalInstance, $resource, NgTableParams, method) {
	    console.log($scope.currentTagId);
	    console.log($scope.currentTagMember);
	    $scope.method = method;
	    $scope.showDepartmentOrUser = 'department';
	    var url = '/tag/sys/addTagUser';
	    $scope.selectedTagUser = [];
	    $scope.postObj = {
	        tagid: $scope.currentTagId,
	        userlist: [],
	        partylist: []
	    };

	    url = url + '?accessId=1';

	    $scope.submit = function () {
	        console.log($scope.postObj);

	        if (!$scope.selectedTagUser) {
	            $scope.errorMsg = '参数不能为空!';
	            return;
	        } 

	        $resource(url).save($scope.postObj).$promise.then(
	            function (ack) {
	            console.log(ack);
	            if (ack.respCode != '1000') {
	                $scope.errorMsg = ack.content;
	                return;
	            }
	            $uibModalInstance.close();
	            $scope.tagTableParams.page(1);
	            $scope.tagTableParams.reload();

	        });

	    };

	    $scope.userInputClick = function () {
	        $scope.errorMsg = '';
	    };

	    $scope.deleteSelectedTagUser = function (tag) {
	        console.log(tag);
	        $scope.selectedTagUser.remove(tag);
	        if (typeof(tag.id) != 'undefined') {
	            $scope.postObj.partylist.remove(tag.id);
	        } else {
	            $scope.postObj.userlist.remove(tag.userid);
	        }
	    };

	    $scope.setTagId = function (tag) {

	        if ($scope.selectedTagUser.indexOf(tag) == -1) {
	            $scope.selectedTagUser.push(tag);
	        }

	        if (typeof(tag.id) != 'undefined' && $scope.postObj.partylist.indexOf(tag.id) == -1) {
	            $scope.postObj.partylist.push(tag.id);
	        } else if (typeof(tag.id) == 'undefined' && $scope.postObj.userlist.indexOf(tag.userid) == -1) {
	            $scope.postObj.userlist.push(tag.userid);
	        }

	    }

	    function isEditModel() {
	        return $scope.user.id ? true : false;
	    }

	    $scope.cancle = function () {
	        $uibModalInstance.close();
	        $scope.tableParams.page(1);
	        $scope.tableParams.reload();
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

	    $scope.queryDepartment = function () {
	        var queryDepartmentApi = $resource('/department/sys/queryDepartment');
	        queryDepartmentApi.query({'id': '1', 'accessId': '1'},
	            function(data){
	                console.log(data);  
	                $scope.data = data[0];
	                $scope.departments = angular.copy(data[1]);

	            },
	            function(err){
	                alert('ajax error!' +err);
	            }
	        );

	    }
	    
	    
	    $scope.getMemberList = function(departmentId) {

	        var getMemberListApi = $resource('/department/sys/getMemberList');
	        $scope.tableParams = new NgTableParams({
	            page: 1,           
	            count: 10,
	            accessId: 1,
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

	    $scope.addDepartment = function() {
	        $scope.showDepartmentOrUser = 'department';
	        $scope.departmentLink = 'active';
	        $scope.memberLink = '';
	        $scope.queryDepartment();
	    }

	    $scope.addDepartmentUser = function() {
	        $scope.showDepartmentOrUser = 'user';
	        $scope.departmentLink = '';
	        $scope.memberLink = 'active';
	        $scope.getMemberList(1);
	    }

	    $scope.departmentNameClicked = function(department) {

	        if ('department' == $scope.showDepartmentOrUser) {
	            $scope.setTagId(department);
	        } else{
	            $scope.getMemberList(department.id);
	        };
	    }

	    $scope.queryDepartment();
	    $scope.addDepartmentUser();

	}


/***/ },

/***/ 120:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(121);
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

/***/ 121:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports


	// module
	exports.push([module.id, ".js_mbodyr {\n  height: 399px;\n}\ntr {\n  cursor: pointer;\n}\n.middle-size-li {\n  display: inline;\n  list-style-type: none;\n  padding: 5px 10px;\n}\n.float-div {\n  position: absolute;\n  margin-left: 10px;\n  margin-top: 10px;\n  background: #fff;\n}\n.without-border {\n  border: 0px;\n  margin-bottom: 4px;\n}\n.without-border:focus {\n  border: 0px;\n}\n.ul-form-control {\n  width: 100%;\n  padding: 6px 12px;\n  font-size: 14px;\n  line-height: 1.42857143;\n  color: #555;\n  background-color: #fff;\n  background-image: none;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,0.075);\n  box-shadow: inset 0 1px 1px rgba(0,0,0,0.075);\n  -webkit-transition: border-color ease-in-out 0.15s, -webkit-box-shadow ease-in-out 0.15s;\n  -o-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n}\n.with-border {\n  border: 2px dotted #000;\n}\n.with-border:focus {\n  box-shadow: 10px 10px 5px #fff;\n}\nbody {\n  font: 14px/1.5 \"Helvetica Neue\", Helvetica Neue, Helvetica, Arial, Hiragino Sans GB, Microsoft Yahei, sans-serif;\n  -webkit-font-smoothing: antialiased;\n}\nbody,\nh6 {\n  margin: 0;\n}\nul {\n  margin: 0;\n  padding: 0;\n}\nli {\n  list-style: none;\n}\nh6 {\n  font-size: 100%;\n}\ninput {\n  font-family: \"Helvetica Neue\", Helvetica Neue, Helvetica, Arial, Heiti SC, Hiragino Sans GB, Microsoft Yahei, sans-serif;\n  font-size: inherit;\n  line-height: inherit;\n}\na {\n  cursor: pointer;\n  text-decoration: none;\n  color: #4a90e2;\n}\na:hover {\n  text-decoration: underline;\n}\n.js_select {\n  height: 441px;\n}\n.jstree-node .icon_folder_blue {\n  vertical-align: top;\n  top: 10px !important;\n  margin-right: 6px !important;\n}\n.token-input-list .input_text {\n  padding: 3px 5px 0;\n  height: auto;\n  line-height: normal;\n}\n.jstree-icon.jstree-ocl {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 10;\n}\nbody {\n  color: #222;\n}\nbody,\nhtml {\n  height: 100%;\n}\n.js_phead {\n  display: list-item;\n}\n.tab_bar {\n  border-top: 1px solid #e5e5e5;\n  padding: 0 10px;\n  height: 40px;\n  line-height: 40px;\n  border-bottom: 1px solid #e5e5e5;\n  color: #d8d8d8;\n}\n.tab_filetype_items {\n  overflow: hidden;\n}\n.tab_filetype_items li {\n  float: left;\n  padding: 0 10px;\n}\n.tab_filetype_items li a {\n  float: left;\n  padding: 0 10px;\n  color: #777;\n  height: 40px;\n  line-height: 40px;\n  -webkit-box-sizing: border-box;\n}\n.tab_filetype_items li {\n  text-decoration: none;\n  color: #4a90e2;\n}\n.tab_filetype_items li a.active {\n  border-bottom: 3px solid #4a90e2;\n  color: #222;\n}\n.btn {\n  display: inline-block;\n  height: 28px;\n  margin: 0;\n  padding: 0 10px;\n  min-width: 30px;\n  text-align: center;\n  font-size: 14px;\n  line-height: 28px;\n  color: #222;\n  border: 1px solid #c8c8c8;\n  border-radius: 2px;\n  background: -webkit-linear-gradient(top, #fdfdfd 0, #eff1f4 100%);\n  cursor: default;\n  -webkit-user-select: none;\n}\n.btn:hover {\n  text-decoration: none;\n  cursor: pointer;\n}\n.btn:active,\n.btn:focus {\n  background: -webkit-linear-gradient(top, #e7e7e7 0, #c6c6c6 100%);\n  outline: 0;\n  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.1) inset;\n}\n.btn_blue {\n  color: #fff;\n  background: -webkit-linear-gradient(top, #4a90e2 0, #4a90e2 100%);\n  border-color: #417fc8;\n}\n.btn_blue:disabled {\n  background-image: none;\n  background-color: #a9cdf7;\n  border-color: #6da9d7;\n  box-shadow: none;\n  color: #fff;\n}\n.icon {\n  display: inline-block;\n  width: 24px;\n  height: 24px;\n  background-repeat: no-repeat !important;\n}\n.icon_folder_blue {\n  width: 12px !important;\n  height: 11px !important;\n  background-position: -256px -64px !important;\n}\n.icon_close {\n  background-position: -27px -123px;\n  width: 25px;\n  height: 25px;\n}\n.input_text {\n  width: 240px;\n  height: 35px;\n  line-height: 20px;\n  padding: 4px 5px;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-radius: 3px;\n  resize: none;\n}\n.input_text:focus {\n  outline: 0;\n  border-color: #96c4ff;\n  box-shadow: 0 0 3px rgba(29,201,255,0.8);\n}\n.input_group_add {\n  vertical-align: middle;\n  padding: 2px;\n  height: 20px;\n  border: none;\n  line-height: 20px;\n  color: #777;\n  outline: 0;\n  cursor: pointer;\n}\n.input_group_add:focus {\n  outline: 0;\n}\n.tag_group-name {\n  font-size: 14px;\n  color: #777;\n  padding: 10px 20px;\n  font-weight: 400;\n}\n.tag_group {\n  padding: 10px 0;\n  position: relative;\n}\n.dialog_content_sendTo {\n  position: relative;\n  height: 495px;\n}\n.dialog_content_sendTo .token-input-list {\n  z-index: 800;\n  background-color: #fff;\n  width: 545px;\n  *max-height: 35px;\n  overflow: hidden;\n  overflow-y: auto;\n}\n.dialog_choose_items_org {\n  overflow: auto;\n  height: 399px;\n}\n.dialog_choose_items_org li a {\n  margin-right: 0;\n}\n.dialog_header {\n  cursor: move;\n  position: relative;\n  height: 44px;\n  line-height: 44px;\n  border-bottom: 1px solid #ccc;\n  overflow: hidden;\n  border-radius: 5px 5px 0 0;\n  background: -webkit-linear-gradient(top, #f3f3f3 0, #eee 100%);\n}\n.dialog_header .title {\n  display: block;\n  font-size: 16px;\n  font-weight: 400;\n  text-align: center;\n}\n.dialog_header .dialog_close {\n  position: absolute;\n  top: -5px;\n  right: 0;\n  margin-right: 15px;\n  margin-top: 10px;\n  cursor: pointer;\n}\n.dialog_content {\n  min-height: 120px;\n  position: relative;\n}\n.dialog_tool {\n  background-color: #fff;\n  border-top: 1px solid #e5e5e5;\n  overflow: hidden;\n  height: 50px;\n  border-radius: 0 0 5px 5px;\n  -webkit-border-radius: 0 0 5px 5px;\n}\n.dialog_tool .btn {\n  float: right;\n  text-align: center;\n  margin-top: 10px;\n  margin-right: 10px;\n}\n.video-js:-webkit-full-screen {\n  width: 100% !important;\n  height: 100% !important;\n}\n.mod-dropdown-select__secondary-list::-webkit-scrollbar {\n  width: 14px;\n}\n.mod-dropdown-select__secondary-list::-webkit-scrollbar-track {\n  background: #fff;\n}\n.mod-dropdown-select__secondary-list::-webkit-scrollbar-thumb {\n  background: rgba(215,214,210,0.7);\n  border: 3px solid #fff;\n  border-radius: 10px;\n}\n.mod-dropdown-select__list-content::-webkit-scrollbar {\n  width: 14px;\n}\n.mod-dropdown-select__list-content::-webkit-scrollbar-track {\n  background: #fff;\n}\n.mod-dropdown-select__list-content::-webkit-scrollbar-thumb {\n  background: rgba(215,214,210,0.7);\n  border: 3px solid #fff;\n  border-radius: 10px;\n}\nli,\nul {\n  list-style-type: none;\n}\n.mod-tree-people__input {\n  margin: 20px 40px;\n}\n.mod-tree-people__input .token-input-list {\n  height: auto;\n  width: 100% !important;\n  -webkit-box-sizing: border-box;\n}\n.mod-tree-people__box {\n  border-top: 1px solid #e5e5e5;\n  zoom: 1;\n  clear: both;\n  *zoom: 1;\n}\n.mod-tree-people__box:before {\n  content: '';\n  display: block;\n}\n.mod-tree-people__box:after {\n  content: '';\n  display: table;\n  clear: both;\n}\n.mod-tree-people__org-list {\n  width: 260px;\n  float: left;\n  overflow: auto;\n}\n.mod-tree-people__people-list {\n  margin-left: 260px;\n  height: 100%;\n  border-left: 1px solid #e5e5e5;\n  overflow-y: auto;\n}\n.red {\n  color: #da4a38;\n}\n.ui-ta-c {\n  text-align: center;\n}\n.ui-d-n {\n  display: none !important;\n}\n", ""]);

	// exports


/***/ },

/***/ 122:
/***/ function(module, exports, __webpack_require__) {

	var controller = __webpack_require__(123);
	var mod = angular.module('app.deleteTagUser', []);
	mod.controller('deleteTagUserCtrl', ['$scope', '$uibModalInstance', '$resource', 'ngTableParams', 'currentUser', controller]);
	module.exports = mod;

/***/ },

/***/ 123:
/***/ function(module, exports) {

	module.exports = function ($scope, $uibModalInstance, $resource, NgTableParams, currentUser) {
	    console.log(currentUser);
	    console.log($scope.tagTableParams);
	    $scope.submit = function () {
	        $uibModalInstance.close();

	        var postObj = assemblePostObj(currentUser);
	        console.log(postObj);
	        $resource('/tag/sys/deleteTagUser?accessId=1').save(postObj).$promise.then(
	            function(ack) {
	                console.log(ack);

	                if (ack.respCode != '1000') {
	                    alert('操作失败!' + ack.content);
	                }

	                $scope.tagTableParams.page(1);
	                $scope.tagTableParams.reload();

	        });
	   }

	    $scope.cancle = function () {
	        $uibModalInstance.close();
	    };

	    function assemblePostObj(member) {
	        var result = {
	           'tagid': '',
	           'userlist':[],
	           'partylist':[]
	        };
	        result.tagid = $scope.currentTagId;
	        if (member.type == '成员') {
	            result.userlist.push(member.id);
	        } else {
	            result.partylist.push(member.id);
	        }

	        return result;
	    };

	}


/***/ }

});