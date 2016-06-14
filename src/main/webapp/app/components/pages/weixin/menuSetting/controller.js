module.exports = function($scope, $resource, $uibModal, userService){
    $scope.selectedNode = {name: ''};
    $scope.showPreview = false;
    $scope.currentApp = userService.currentApp;
    $scope.preview = function() {
        $scope.showPreview = true;
    }

    $scope.exitPreview = function() {
        $scope.showPreview = false;
    }
  
    $resource('/weixin/sys/menu/getMenuList?accessId=' + $scope.currentApp.userAccessId).get().$promise.then(function (data) {
                console.log(data);
                $scope.mynodes = JSON.parse(data.content).menu;
                console.log($scope.mynodes);
            });

    $scope.publish = function () {
        console.log('in publish');
        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: require('file!widgets/confirmPopup/template.html'),
            controller: 'confirmPopupCtrl',
            scope: $scope,
            resolve: {
                message: function () {
                return {head: '确定发布菜单？', body: '本次发布将在24小时内对所有粉丝生效。'};
                }
            }
        });

        modalInstance.result.then(function () {
            var url = '/weixin/sys/menu/createMenu?accessId=' + $scope.currentApp.userAccessId;
            $resource(url).save($scope.mynodes).$promise.then(function (ack) {

                if (ack.respCode != '1000') {
                    alert(ack.respMsg + ack.content);
                    return;
                }
                
                modalInstance.close();

            });

        }, function () {
            console.log('Modal dismissed at: ' + new Date());
        });
    };

}