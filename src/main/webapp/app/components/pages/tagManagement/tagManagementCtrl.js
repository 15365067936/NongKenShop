module.exports = function ($rootScope, $stateParams, $scope, $uibModal, $timeout, $resource, $filter, NgTableParams) {
    $scope.data = {};
    $scope.deleteTag = function (tag) {

        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: require('file!../../widgets/confirmPopup/template.html'),
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
            templateUrl: require('file!../../widgets/addEditTag/template.html'),
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
            templateUrl: require('file!../../widgets/addTagUser/template.html'),
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
            templateUrl: require('file!../../widgets/deleteTagUser/template.html'),
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
            templateUrl: require('file!../../widgets/addEditTag/template.html'),
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


