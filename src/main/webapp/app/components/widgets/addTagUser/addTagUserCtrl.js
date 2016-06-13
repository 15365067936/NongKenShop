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
