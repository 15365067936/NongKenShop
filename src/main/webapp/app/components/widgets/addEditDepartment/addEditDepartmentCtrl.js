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
