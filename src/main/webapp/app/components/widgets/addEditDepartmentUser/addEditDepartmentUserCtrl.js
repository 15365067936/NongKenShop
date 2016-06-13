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
