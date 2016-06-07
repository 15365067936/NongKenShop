webpackJsonp([10],{

/***/ 168:
/***/ function(module, exports, __webpack_require__) {

	var controller = __webpack_require__(169);
	__webpack_require__(171);
	__webpack_require__(173);
	var mod = angular.module('app.sendMessageEdit', ['app.addSendMsgUser']);
	mod.controller('sendMessageEditCtrl', ['$scope', '$stateParams', '$location', '$resource', '$uibModal', 'userService', controller]);
	module.exports = mod;


/***/ },

/***/ 169:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function($scope, $stateParams, $location, $resource, $uibModal, userService) {  
	    
	    console.log($stateParams);
	    $scope.currentApplication = userService.currentApp;
	    console.log($scope.currentApplication);
	    $scope.selectedSendModel = '普通模式';
	    $scope.sendInputList = [{firstValue: [], secondValue: [], firstPostObj: {}, secondPostObj: {}, postObj: {}, operator: 'and'}];
	    var queryCriteria = {
	        firstValue: [],
	        secondValue: [],
	        firstPostObj: {},
	        secondPostObj: {},
	        postObj: {},
	        operator: 'and'
	    };

	    $scope.postObjReal = $scope.advPostObjReal = {
	        touser: '',
	        toparty: '',
	        totag: '',
	        msgtype: 'text',
	        text: {
	            content: ''
	        },
	        safe: '0'
	    };

	    $scope.selectModel = function(sendModel) {
	        console.log(sendModel);
	        $scope.selectedSendModel = sendModel;
	        
	    }

	    $scope.selectCacul = function(cacul, index) {
	        console.log(cacul);
	        console.log(index);
	        $scope.sendInputList[index].operator = cacul;
	        
	    }

	    $scope.selectMsgType = function(msgtype) {
	        switch (msgtype) {
	            case '文本消息' : 
	                $scope.textMsg = 'active';
	                $scope.newsMsg = $scope.imgMsg = $scope.fileMsg = $scope.videoMsg = $scope.voiceMsg = '';
	                break;
	            case '图文消息' :
	                $scope.newsMsg = 'active';
	                $scope.textMsg =  $scope.imgMsg = $scope.fileMsg = $scope.videoMsg = $scope.voiceMsg = '';
	                break;
	            case '图片消息' :
	                $scope.imgMsg = 'active';
	                $scope.textMsg =  $scope.newsMsg = $scope.fileMsg = $scope.videoMsg = $scope.voiceMsg = '';
	                break;
	            case '文件消息' :
	                $scope.fileMsg = 'active';
	                $scope.textMsg =  $scope.imgMsg = $scope.newsMsg = $scope.videoMsg = $scope.voiceMsg = '';
	                break;
	            case '视频消息' :
	                $scope.videoMsg = 'active';
	                $scope.textMsg =  $scope.imgMsg = $scope.fileMsg = $scope.newsMsg = $scope.voiceMsg = '';
	                break;
	            case '语音消息' :
	                $scope.voiceMsg = 'active';
	                $scope.textMsg =  $scope.imgMsg = $scope.fileMsg = $scope.videoMsg = $scope.newsMsg = '';
	                break;
	        }
	        console.log(msgtype);
	        $scope.selectedMsgType = msgtype;
	    }

	    $scope.selectFile = function() {
	        $scope.selectedFile = 1;
	    }

	    $scope.uploadPic = function (file, picType) {
	        console.log("enter uploadPic");
	        console.log(file);
	        if (file != null) {
	            console.log("enter uploadPic file not null");
	            $scope.allowUploadPic = false;
	            $scope.selectedFile=0;
	            upload(file, picType);
	        }
	    };

	    $scope.selectAudioFile = function() {
	        $scope.selectedFile = 1;
	    }

	    $scope.uploadAudio = function (file, type) {
	        console.log("enter uploadAudio");
	        console.log(file);
	        if (file != null) {
	            console.log("enter uploadAudioPic file not null");
	            $scope.allowUploadPic = false;
	            $scope.selectedFile=0;
	            upload(file, type);
	        }
	    };

	    function upload(file, type) {
	        var location = (window.location+'').split('/'); 
	    
	        var url =  'sendMsg/sys/uploadTempFile?accessId=1&type=' + type; 
	        console.log(url);

	        file.upload = Upload.upload({
	            url: url,
	            method: 'POST',
	            headers: {
	                'Content-Type': 'multipart/form-data; boundary=----WebKitFormBoundaryrGKCBY7qhFd3TrwA'
	            },
	            data: {file: file}
	        });

	        file.upload.then(function (response) {
	            console.log(response);
	            file.path = response.data.path;
	            alert("临时素材上传成功！");
	            $scope.allowUploadPic = true;
	        }, function (response) {
	            alert("临时素材上传失败！");
	            file.path = "";
	            $scope.allowUploadPic = true;
	        });
	    };

	    $scope.addSendInput = function() {
	        console.log($scope.sendInputList.length);
	        $scope.sendInputList.push(angular.copy(queryCriteria));
	        
	    }

	    $scope.delSendInput = function(index) {
	        console.log(index);
	        $scope.sendInputList.splice(index, 1);
	        
	    }

	    $scope.basicAddSendUser = function() {
	        console.log(index);
	        $scope.sendInputList.splice(index, 1);
	        
	    }

	    $scope.basicAddSendUser = function () {
	        console.log('in basicAddSendUser');

	        var modalInstance = $uibModal.open({
	            animation: $scope.animationsEnabled,
	            templateUrl: __webpack_require__(170),
	            controller: 'addSendMsgUserCtrl',
	            scope: $scope,
	            resolve: {
	                method: function () {
	                    return '';
	                }
	            }
	        });

	        modalInstance.result.then(function (result) {
	            console.log(result);
	            var selectedSendUser = result[0];
	            var postObj = result[1]; 
	            $scope.selectedSendUser = selectedSendUser;
	            $scope.postObjReal.toparty = postObj.toparty.join('|');
	            $scope.postObjReal.touser = postObj.touser.join('|');
	            $scope.postObjReal.totag = postObj.totag.join('|');
	            console.log(selectedSendUser);
	            console.log($scope.postObjReal);
	        }, function () {
	            console.log('basicAddSendUser error!');
	        });

	    };

	    $scope.advAddSendUser = function (position, index) {
	        console.log('in advAddSendUser');

	        var modalInstance = $uibModal.open({
	            animation: $scope.animationsEnabled,
	            templateUrl: __webpack_require__(170),
	            controller: 'addSendMsgUserCtrl',
	            scope: $scope,
	            resolve: {
	                method: function () {
	                    return '';
	                }
	            }
	        });

	        modalInstance.result.then(function (result) {
	            console.log(result);
	            var selectedSendUser = result[0];
	            var postObj = result[1];

	            if ('first' == position) {
	                $scope.sendInputList[index].firstValue = selectedSendUser;
	                $scope.sendInputList[index].firstPostObj = postObj;
	            } else if ('second' == position) {
	                $scope.sendInputList[index].secondValue = selectedSendUser;
	                $scope.sendInputList[index].secondPostObj = postObj;
	            }

	            mergeIndexPostObj(index);

	            console.log($scope.sendInputList[index]);
	        }, function () {
	            console.log('advAddSendUser error!');
	        });

	    };

	    function mergeIndexPostObj(index) {
	        if ('and' == $scope.sendInputList[index].operator) {
	            $scope.sendInputList[index].postObj.touser = __.union($scope.sendInputList[index].firstPostObj.touser, $scope.sendInputList[index].secondPostObj.touser);
	            $scope.sendInputList[index].postObj.totag = __.union($scope.sendInputList[index].firstPostObj.totag, $scope.sendInputList[index].secondPostObj.totag);
	            $scope.sendInputList[index].postObj.toparty = __.union($scope.sendInputList[index].firstPostObj.toparty, $scope.sendInputList[index].secondPostObj.toparty);
	        } else if ('except' == $scope.sendInputList[index].operator) {
	            $scope.sendInputList[index].postObj.touser = __.difference($scope.sendInputList[index].firstPostObj.touser, $scope.sendInputList[index].secondPostObj.touser);
	            $scope.sendInputList[index].postObj.toparty = __.difference($scope.sendInputList[index].firstPostObj.toparty, $scope.sendInputList[index].secondPostObj.toparty);
	            $scope.sendInputList[index].postObj.totag = __.difference($scope.sendInputList[index].firstPostObj.totag, $scope.sendInputList[index].secondPostObj.totag);
	        }

	    }

	    function mergePostObj() {
	        
	        for (var i = $scope.sendInputList.length - 1; i >= 0; i--) {
	            $scope.advPostObjReal.touser = __.union($scope.advPostObjReal.touser, $scope.sendInputList[i].secondPostObj.touser);
	            $scope.advPostObjReal.totag = __.union($scope.advPostObjReal.totag, $scope.sendInputList[i].secondPostObj.totag);
	            $scope.advPostObjReal.toparty = __.union($scope.advPostObjReal.toparty, $scope.sendInputList[i].secondPostObj.toparty);
	        };

	        console.log($scope.advPostObjReal);
	    }

	    $scope.submitSend = function() {
	        if ('普通模式' == $scope.selectedSendModel) {
	            $scope.postObjReal.text.content = $scope.sendText;


	        } else if ('高级模式' == $scope.selectedSendModel) {
	            mergePostObj();
	            $scope.advPostObjReal.text.content = $scope.sendText;
	            $scope.postObjReal = $scope.advPostObjReal;
	        }

	        $resource("message/sys/").save($scope.postObj).$promise.then(
	            function(ack) {
	                console.log(ack);

	                if (ack.respCode != '1000') {
	                    alert('操作失败!' + ack.respMsg);
	                }

	                $scope.tableParams.page(1);
	                $scope.tableParams.reload();

	        });
	    }

	    $scope.deleteSelectedTagUser = function (tag) {
	        console.log(tag);
	        $scope.selectedSendUser.remove(tag);
	    };

	    $scope.deleteAdvSelectedSendUser = function (tag, position, index) {
	        console.log(tag);
	        console.log(index);
	        console.log($scope.sendInputList);
	        if ('first' == position) {
	                $scope.sendInputList[index].firstValue.remove(tag);
	        } else if ('second' == position) {
	                $scope.sendInputList[index].secondValue.remove(tag);
	        }
	        
	    };


	}

/***/ },

/***/ 170:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "de830361e822c639b5450c52fc43ad3b.html";

/***/ },

/***/ 171:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(172);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(14)(content, {});
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

/***/ 172:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports


	// module
	exports.push([module.id, ".js_mbodyr {\n  height: 399px;\n}\ntr {\n  cursor: pointer;\n}\n.middle-size-li {\n  display: inline;\n  list-style-type: none;\n  padding: 5px 10px;\n}\n.float-div {\n  position: absolute;\n  margin-left: 10px;\n  margin-top: 10px;\n  background: #fff;\n}\n.without-border {\n  border: 0px;\n  margin-bottom: 4px;\n}\n.without-border:focus {\n  border: 0px;\n}\n.ul-form-control {\n  width: 100%;\n  padding: 6px 12px;\n  font-size: 14px;\n  line-height: 1.42857143;\n  color: #555;\n  background-color: #fff;\n  background-image: none;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,0.075);\n  box-shadow: inset 0 1px 1px rgba(0,0,0,0.075);\n  -webkit-transition: border-color ease-in-out 0.15s, -webkit-box-shadow ease-in-out 0.15s;\n  -o-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n}\n.with-border {\n  border: 2px dotted #000;\n}\n.with-border:focus {\n  box-shadow: 10px 10px 5px #fff;\n}\nbody {\n  font: 14px/1.5 \"Helvetica Neue\", Helvetica Neue, Helvetica, Arial, Hiragino Sans GB, Microsoft Yahei, sans-serif;\n  -webkit-font-smoothing: antialiased;\n}\nbody,\nh6 {\n  margin: 0;\n}\nul {\n  margin: 0;\n  padding: 0;\n}\nli {\n  list-style: none;\n}\nh6 {\n  font-size: 100%;\n}\ninput {\n  font-family: \"Helvetica Neue\", Helvetica Neue, Helvetica, Arial, Heiti SC, Hiragino Sans GB, Microsoft Yahei, sans-serif;\n  font-size: inherit;\n  line-height: inherit;\n}\na {\n  cursor: pointer;\n  text-decoration: none;\n  color: #4a90e2;\n}\na:hover {\n  text-decoration: underline;\n}\n.js_select {\n  height: 441px;\n}\n.jstree-node .icon_folder_blue {\n  vertical-align: top;\n  top: 10px !important;\n  margin-right: 6px !important;\n}\n.token-input-list .input_text {\n  padding: 3px 5px 0;\n  height: auto;\n  line-height: normal;\n}\n.jstree-icon.jstree-ocl {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 10;\n}\nbody {\n  color: #222;\n}\nbody,\nhtml {\n  height: 100%;\n}\n.js_phead {\n  display: list-item;\n}\n.tab_bar {\n  border-top: 1px solid #e5e5e5;\n  padding: 0 10px;\n  height: 40px;\n  line-height: 40px;\n  border-bottom: 1px solid #e5e5e5;\n  color: #d8d8d8;\n}\n.tab_filetype_items {\n  overflow: hidden;\n}\n.tab_filetype_items li {\n  float: left;\n  padding: 0 10px;\n}\n.tab_filetype_items li a {\n  float: left;\n  padding: 0 10px;\n  color: #777;\n  height: 40px;\n  line-height: 40px;\n  -webkit-box-sizing: border-box;\n}\n.tab_filetype_items li {\n  text-decoration: none;\n  color: #4a90e2;\n}\n.tab_filetype_items li a.active {\n  border-bottom: 3px solid #4a90e2;\n  color: #222;\n}\n.btn {\n  display: inline-block;\n  height: 28px;\n  margin: 0;\n  padding: 0 10px;\n  min-width: 30px;\n  text-align: center;\n  font-size: 14px;\n  line-height: 28px;\n  color: #222;\n  border: 1px solid #c8c8c8;\n  border-radius: 2px;\n  background: -webkit-linear-gradient(top, #fdfdfd 0, #eff1f4 100%);\n  cursor: default;\n  -webkit-user-select: none;\n}\n.btn:hover {\n  text-decoration: none;\n  cursor: pointer;\n}\n.btn:active,\n.btn:focus {\n  background: -webkit-linear-gradient(top, #e7e7e7 0, #c6c6c6 100%);\n  outline: 0;\n  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.1) inset;\n}\n.btn_blue {\n  color: #fff;\n  background: -webkit-linear-gradient(top, #4a90e2 0, #4a90e2 100%);\n  border-color: #417fc8;\n}\n.btn_blue:disabled {\n  background-image: none;\n  background-color: #a9cdf7;\n  border-color: #6da9d7;\n  box-shadow: none;\n  color: #fff;\n}\n.icon {\n  display: inline-block;\n  width: 24px;\n  height: 24px;\n  background-repeat: no-repeat !important;\n}\n.icon_folder_blue {\n  width: 12px !important;\n  height: 11px !important;\n  background-position: -256px -64px !important;\n}\n.icon_close {\n  background-position: -27px -123px;\n  width: 25px;\n  height: 25px;\n}\n.input_text {\n  width: 240px;\n  height: 35px;\n  line-height: 20px;\n  padding: 4px 5px;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-radius: 3px;\n  resize: none;\n}\n.input_text:focus {\n  outline: 0;\n  border-color: #96c4ff;\n  box-shadow: 0 0 3px rgba(29,201,255,0.8);\n}\n.input_group_add {\n  vertical-align: middle;\n  padding: 2px;\n  height: 20px;\n  border: none;\n  line-height: 20px;\n  color: #777;\n  outline: 0;\n  cursor: pointer;\n}\n.input_group_add:focus {\n  outline: 0;\n}\n.tag_group-name {\n  font-size: 14px;\n  color: #777;\n  padding: 10px 20px;\n  font-weight: 400;\n}\n.tag_group {\n  padding: 10px 0;\n  position: relative;\n}\n.dialog_content_sendTo {\n  position: relative;\n  height: 495px;\n}\n.dialog_content_sendTo .token-input-list {\n  z-index: 800;\n  background-color: #fff;\n  width: 545px;\n  *max-height: 35px;\n  overflow: hidden;\n  overflow-y: auto;\n}\n.dialog_choose_items_org {\n  overflow: auto;\n  height: 399px;\n}\n.dialog_choose_items_org li a {\n  margin-right: 0;\n}\n.dialog_header {\n  cursor: move;\n  position: relative;\n  height: 44px;\n  line-height: 44px;\n  border-bottom: 1px solid #ccc;\n  overflow: hidden;\n  border-radius: 5px 5px 0 0;\n  background: -webkit-linear-gradient(top, #f3f3f3 0, #eee 100%);\n}\n.dialog_header .title {\n  display: block;\n  font-size: 16px;\n  font-weight: 400;\n  text-align: center;\n}\n.dialog_header .dialog_close {\n  position: absolute;\n  top: -5px;\n  right: 0;\n  margin-right: 15px;\n  margin-top: 10px;\n  cursor: pointer;\n}\n.dialog_content {\n  min-height: 120px;\n  position: relative;\n}\n.dialog_tool {\n  background-color: #fff;\n  border-top: 1px solid #e5e5e5;\n  overflow: hidden;\n  height: 50px;\n  border-radius: 0 0 5px 5px;\n  -webkit-border-radius: 0 0 5px 5px;\n}\n.dialog_tool .btn {\n  float: right;\n  text-align: center;\n  margin-top: 10px;\n  margin-right: 10px;\n}\n.video-js:-webkit-full-screen {\n  width: 100% !important;\n  height: 100% !important;\n}\n.mod-dropdown-select__secondary-list::-webkit-scrollbar {\n  width: 14px;\n}\n.mod-dropdown-select__secondary-list::-webkit-scrollbar-track {\n  background: #fff;\n}\n.mod-dropdown-select__secondary-list::-webkit-scrollbar-thumb {\n  background: rgba(215,214,210,0.7);\n  border: 3px solid #fff;\n  border-radius: 10px;\n}\n.mod-dropdown-select__list-content::-webkit-scrollbar {\n  width: 14px;\n}\n.mod-dropdown-select__list-content::-webkit-scrollbar-track {\n  background: #fff;\n}\n.mod-dropdown-select__list-content::-webkit-scrollbar-thumb {\n  background: rgba(215,214,210,0.7);\n  border: 3px solid #fff;\n  border-radius: 10px;\n}\nli,\nul {\n  list-style-type: none;\n}\n.mod-tree-people__input {\n  margin: 20px 40px;\n}\n.mod-tree-people__input .token-input-list {\n  height: auto;\n  width: 100% !important;\n  -webkit-box-sizing: border-box;\n}\n.mod-tree-people__box {\n  border-top: 1px solid #e5e5e5;\n  zoom: 1;\n  clear: both;\n  *zoom: 1;\n}\n.mod-tree-people__box:before {\n  content: '';\n  display: block;\n}\n.mod-tree-people__box:after {\n  content: '';\n  display: table;\n  clear: both;\n}\n.mod-tree-people__org-list {\n  width: 260px;\n  float: left;\n  overflow: auto;\n}\n.mod-tree-people__people-list {\n  margin-left: 260px;\n  height: 100%;\n  border-left: 1px solid #e5e5e5;\n  overflow-y: auto;\n}\n.red {\n  color: #da4a38;\n}\n.ui-ta-c {\n  text-align: center;\n}\n.ui-d-n {\n  display: none !important;\n}\n", ""]);

	// exports


/***/ },

/***/ 173:
/***/ function(module, exports, __webpack_require__) {

	var controller = __webpack_require__(174);
	__webpack_require__(175);
	var mod = angular.module('app.addSendMsgUser', []);
	mod.controller('addSendMsgUserCtrl', ['$scope', '$uibModalInstance', '$resource', 'ngTableParams', 'method', controller]);
	module.exports = mod;

/***/ },

/***/ 174:
/***/ function(module, exports) {

	module.exports = function ($scope, $uibModalInstance, $resource, NgTableParams, method) {

	    $scope.method = method;
	    $scope.showDepartmentOrUser = 'department';
	    var url = '/tag/sys/addTagUser';
	    $scope.selectedTagUser = [];
	    $scope.postObj = {
	        touser: [],
	        toparty: [],
	        totag: [],
	        msgtype: 'text',
	        text: {
	            content: ''
	        },
	        safe: '0'
	    };

	    url = url + '?accessId=1';

	    $scope.submit = function () {

	        if (!$scope.selectedTagUser) {
	            $scope.errorMsg = '参数不能为空!';
	            return;
	        } 

	        $uibModalInstance.close([$scope.selectedTagUser, $scope.postObj]);

	    };

	    $scope.userInputClick = function () {
	        $scope.errorMsg = '';
	    };

	    $scope.deleteSelectedTagUser = function (tag) {

	        $scope.selectedTagUser.remove(tag);

	        if (typeof(tag.id) != 'undefined') {
	            $scope.postObj.toparty.remove(tag.id);
	        } else if (typeof(tag.userid) != 'undefined') {
	            $scope.postObj.touser.remove(tag.userid);
	        } else if (typeof(tag.tagid) != 'undefined') {
	            $scope.postObj.totag.remove(tag.tagid);
	        }

	    };

	    $scope.setTagId = function (tag) {

	        if ($scope.selectedTagUser.indexOf(tag) == -1) {
	            $scope.selectedTagUser.push(tag);
	        }

	        if (typeof(tag.id) != 'undefined' && $scope.postObj.toparty.indexOf(tag.id) == -1) {
	            //it's a party
	            $scope.postObj.toparty.push(tag.id);
	        } else if (typeof(tag.userid) != 'undefined' && $scope.postObj.touser.indexOf(tag.userid) == -1) {
	            //it's a user
	            $scope.postObj.touser.push(tag.userid);
	        } else if (typeof(tag.tagid) != 'undefined' && $scope.postObj.totag.indexOf(tag.tagid) == -1) {
	            //it's a tag
	            $scope.postObj.totag.push(tag.tagid);
	        }

	    }

	    function isEditModel() {
	        return $scope.user.id ? true : false;
	    }

	    $scope.cancle = function () {
	        $uibModalInstance.close();
	    };

	    Array.prototype.remove = function(val) {
	        var index = this.indexOf(val);

	        if (index > -1) {
	            this.splice(index, 1);
	        }

	    };

	    $scope.queryDepartment = function () {
	        var queryDepartmentApi = $resource('/department/sys/queryDepartment');

	        queryDepartmentApi.query({'id': '1', 'accessId': '1'},
	            function(data){
	                $scope.data = data[0];
	                $scope.departments = angular.copy(data[1]);
	            },
	            function(err){
	                alert("ajax error!" +err);
	            });

	    }

	    $scope.queryTag = function () {
	        var queryTagApi = $resource('/tag/sys/queryTag');

	        queryTagApi.query({'accessId': '1'},
	            function(data){
	                $scope.tagData = data;
	            },
	            function(err){
	                alert("ajax error!" +err);
	            });

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
	        $scope.memberLink = $scope.tagLink = '';
	        $scope.queryDepartment();
	    }

	    $scope.addTag = function() {
	        $scope.showDepartmentOrUser = 'tag';
	        $scope.tagLink = 'active';
	        $scope.memberLink = $scope.departmentLink = '';
	        $scope.queryTag();
	    }

	    $scope.addDepartmentUser = function() {
	        $scope.showDepartmentOrUser = 'user';
	        $scope.departmentLink = $scope.tagLink = '';
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

/***/ 175:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(176);
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

/***/ 176:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports


	// module
	exports.push([module.id, ".js_mbodyr {\n  height: 399px;\n}\ntr {\n  cursor: pointer;\n}\n.middle-size-li {\n  display: inline;\n  list-style-type: none;\n  padding: 5px 10px;\n}\n.float-div {\n  position: absolute;\n  margin-left: 10px;\n  margin-top: 10px;\n  background: #fff;\n}\n.without-border {\n  border: 0px;\n  margin-bottom: 4px;\n}\n.without-border:focus {\n  border: 0px;\n}\n.ul-form-control {\n  width: 100%;\n  padding: 6px 12px;\n  font-size: 14px;\n  line-height: 1.42857143;\n  color: #555;\n  background-color: #fff;\n  background-image: none;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,0.075);\n  box-shadow: inset 0 1px 1px rgba(0,0,0,0.075);\n  -webkit-transition: border-color ease-in-out 0.15s, -webkit-box-shadow ease-in-out 0.15s;\n  -o-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n}\n.with-border {\n  border: 2px dotted #000;\n}\n.with-border:focus {\n  box-shadow: 10px 10px 5px #fff;\n}\nbody {\n  font: 14px/1.5 \"Helvetica Neue\", Helvetica Neue, Helvetica, Arial, Hiragino Sans GB, Microsoft Yahei, sans-serif;\n  -webkit-font-smoothing: antialiased;\n}\nbody,\nh6 {\n  margin: 0;\n}\nul {\n  margin: 0;\n  padding: 0;\n}\nli {\n  list-style: none;\n}\nh6 {\n  font-size: 100%;\n}\ninput {\n  font-family: \"Helvetica Neue\", Helvetica Neue, Helvetica, Arial, Heiti SC, Hiragino Sans GB, Microsoft Yahei, sans-serif;\n  font-size: inherit;\n  line-height: inherit;\n}\na {\n  cursor: pointer;\n  text-decoration: none;\n  color: #4a90e2;\n}\na:hover {\n  text-decoration: underline;\n}\n.js_select {\n  height: 441px;\n}\n.jstree-node .icon_folder_blue {\n  vertical-align: top;\n  top: 10px !important;\n  margin-right: 6px !important;\n}\n.token-input-list .input_text {\n  padding: 3px 5px 0;\n  height: auto;\n  line-height: normal;\n}\n.jstree-icon.jstree-ocl {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 10;\n}\nbody {\n  color: #222;\n}\nbody,\nhtml {\n  height: 100%;\n}\n.js_phead {\n  display: list-item;\n}\n.tab_bar {\n  border-top: 1px solid #e5e5e5;\n  padding: 0 10px;\n  height: 40px;\n  line-height: 40px;\n  border-bottom: 1px solid #e5e5e5;\n  color: #d8d8d8;\n}\n.tab_filetype_items {\n  overflow: hidden;\n}\n.tab_filetype_items li {\n  float: left;\n  padding: 0 10px;\n}\n.tab_filetype_items li a {\n  float: left;\n  padding: 0 10px;\n  color: #777;\n  height: 40px;\n  line-height: 40px;\n  -webkit-box-sizing: border-box;\n}\n.tab_filetype_items li {\n  text-decoration: none;\n  color: #4a90e2;\n}\n.tab_filetype_items li a.active {\n  border-bottom: 3px solid #4a90e2;\n  color: #222;\n}\n.btn {\n  display: inline-block;\n  height: 28px;\n  margin: 0;\n  padding: 0 10px;\n  min-width: 30px;\n  text-align: center;\n  font-size: 14px;\n  line-height: 28px;\n  color: #222;\n  border: 1px solid #c8c8c8;\n  border-radius: 2px;\n  background: -webkit-linear-gradient(top, #fdfdfd 0, #eff1f4 100%);\n  cursor: default;\n  -webkit-user-select: none;\n}\n.btn:hover {\n  text-decoration: none;\n  cursor: pointer;\n}\n.btn:active,\n.btn:focus {\n  background: -webkit-linear-gradient(top, #e7e7e7 0, #c6c6c6 100%);\n  outline: 0;\n  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.1) inset;\n}\n.btn_blue {\n  color: #fff;\n  background: -webkit-linear-gradient(top, #4a90e2 0, #4a90e2 100%);\n  border-color: #417fc8;\n}\n.btn_blue:disabled {\n  background-image: none;\n  background-color: #a9cdf7;\n  border-color: #6da9d7;\n  box-shadow: none;\n  color: #fff;\n}\n.icon {\n  display: inline-block;\n  width: 24px;\n  height: 24px;\n  background-repeat: no-repeat !important;\n}\n.icon_folder_blue {\n  width: 12px !important;\n  height: 11px !important;\n  background-position: -256px -64px !important;\n}\n.icon_close {\n  background-position: -27px -123px;\n  width: 25px;\n  height: 25px;\n}\n.input_text {\n  width: 240px;\n  height: 35px;\n  line-height: 20px;\n  padding: 4px 5px;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-radius: 3px;\n  resize: none;\n}\n.input_text:focus {\n  outline: 0;\n  border-color: #96c4ff;\n  box-shadow: 0 0 3px rgba(29,201,255,0.8);\n}\n.input_group_add {\n  vertical-align: middle;\n  padding: 2px;\n  height: 20px;\n  border: none;\n  line-height: 20px;\n  color: #777;\n  outline: 0;\n  cursor: pointer;\n}\n.input_group_add:focus {\n  outline: 0;\n}\n.tag_group-name {\n  font-size: 14px;\n  color: #777;\n  padding: 10px 20px;\n  font-weight: 400;\n}\n.tag_group {\n  padding: 10px 0;\n  position: relative;\n}\n.dialog_content_sendTo {\n  position: relative;\n  height: 495px;\n}\n.dialog_content_sendTo .token-input-list {\n  z-index: 800;\n  background-color: #fff;\n  width: 545px;\n  *max-height: 35px;\n  overflow: hidden;\n  overflow-y: auto;\n}\n.dialog_choose_items_org {\n  overflow: auto;\n  height: 399px;\n}\n.dialog_choose_items_org li a {\n  margin-right: 0;\n}\n.dialog_header {\n  cursor: move;\n  position: relative;\n  height: 44px;\n  line-height: 44px;\n  border-bottom: 1px solid #ccc;\n  overflow: hidden;\n  border-radius: 5px 5px 0 0;\n  background: -webkit-linear-gradient(top, #f3f3f3 0, #eee 100%);\n}\n.dialog_header .title {\n  display: block;\n  font-size: 16px;\n  font-weight: 400;\n  text-align: center;\n}\n.dialog_header .dialog_close {\n  position: absolute;\n  top: -5px;\n  right: 0;\n  margin-right: 15px;\n  margin-top: 10px;\n  cursor: pointer;\n}\n.dialog_content {\n  min-height: 120px;\n  position: relative;\n}\n.dialog_tool {\n  background-color: #fff;\n  border-top: 1px solid #e5e5e5;\n  overflow: hidden;\n  height: 50px;\n  border-radius: 0 0 5px 5px;\n  -webkit-border-radius: 0 0 5px 5px;\n}\n.dialog_tool .btn {\n  float: right;\n  text-align: center;\n  margin-top: 10px;\n  margin-right: 10px;\n}\n.video-js:-webkit-full-screen {\n  width: 100% !important;\n  height: 100% !important;\n}\n.mod-dropdown-select__secondary-list::-webkit-scrollbar {\n  width: 14px;\n}\n.mod-dropdown-select__secondary-list::-webkit-scrollbar-track {\n  background: #fff;\n}\n.mod-dropdown-select__secondary-list::-webkit-scrollbar-thumb {\n  background: rgba(215,214,210,0.7);\n  border: 3px solid #fff;\n  border-radius: 10px;\n}\n.mod-dropdown-select__list-content::-webkit-scrollbar {\n  width: 14px;\n}\n.mod-dropdown-select__list-content::-webkit-scrollbar-track {\n  background: #fff;\n}\n.mod-dropdown-select__list-content::-webkit-scrollbar-thumb {\n  background: rgba(215,214,210,0.7);\n  border: 3px solid #fff;\n  border-radius: 10px;\n}\nli,\nul {\n  list-style-type: none;\n}\n.mod-tree-people__input {\n  margin: 20px 40px;\n}\n.mod-tree-people__input .token-input-list {\n  height: auto;\n  width: 100% !important;\n  -webkit-box-sizing: border-box;\n}\n.mod-tree-people__box {\n  border-top: 1px solid #e5e5e5;\n  zoom: 1;\n  clear: both;\n  *zoom: 1;\n}\n.mod-tree-people__box:before {\n  content: '';\n  display: block;\n}\n.mod-tree-people__box:after {\n  content: '';\n  display: table;\n  clear: both;\n}\n.mod-tree-people__org-list {\n  width: 260px;\n  float: left;\n  overflow: auto;\n}\n.mod-tree-people__people-list {\n  margin-left: 260px;\n  height: 100%;\n  border-left: 1px solid #e5e5e5;\n  overflow-y: auto;\n}\n.red {\n  color: #da4a38;\n}\n.ui-ta-c {\n  text-align: center;\n}\n.ui-d-n {\n  display: none !important;\n}\n", ""]);

	// exports


/***/ }

});