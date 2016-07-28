module.exports = function($rootScope, $scope, $resource, $state, userService, localStorageService) {
	return {
        priority: 0,
        templateUrl: require("file!./template.html"),
        controller: function($rootScope, $scope, $resource, $state, userService, localStorageService) {  
            
            $scope.data = {currentApp: angular.copy(userService.currentApp)};
            $scope.user = userService;
            $rootScope.logout = function() {
                window.location = '../admin/admin_login.html';
            //     $resource("/user/logout").save().$promise.then(function(data) {
            //         console.log(data);

            //         if (data.respCode == 1000) {
            //             $rootScope.userInfo = {};
            //             $state.go('login');
            //         } else {
            //             alert('logout failed!');
            //         }
            //     });
            }
            
            $rootScope.resetPassword = function() {
            	
            }

            $scope.changedValue = function(selected) {
                console.log(selected);
                userService.currentApp = angular.copy(selected);
                localStorageService.set('currentApp', selected);
                $state.go('send-message-edit');

                console.log(userService.currentApp);
            }
        }
	}
}