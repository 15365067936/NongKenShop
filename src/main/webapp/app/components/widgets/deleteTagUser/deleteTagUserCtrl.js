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
