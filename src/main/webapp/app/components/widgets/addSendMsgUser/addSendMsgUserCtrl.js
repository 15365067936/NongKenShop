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
