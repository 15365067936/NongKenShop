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
            templateUrl: require('file!../../../widgets/addSendMsgUser/template.html'),
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
            templateUrl: require('file!../../../widgets/addSendMsgUser/template.html'),
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