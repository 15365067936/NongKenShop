module.exports = function($rootScope, $scope, $location, $resource, userService) {  
    $scope.login = function($event) {
        
        var url = $location.$$absUrl;

        var authData = {
            username: $scope.username,
            password: $scope.password
        };

        $resource('/user/login').save(authData).$promise.then(function(data) {
            console.log(data);
            if (data.respCode == 1000) {
                userService.userInfo = {
                    username: $scope.username,
                    role: 'admin'
                };
                $rootScope.showSideAndHead = true;
                $location.path($rootScope.returnToState || '/access-application-list');
            } else {
                alert(data.respMsg);
            }
        });
        
    }
}