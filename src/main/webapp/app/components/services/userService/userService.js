module.exports = function($rootScope, $window, $location, localStorageService) {
    var user = {
        userInfo: {name: 'mock', role: 'admin'},
        currentApp: {}
    };

    var sidebarMenus = {
        admin: [
            {title: '应用管理', link: 'application-list', cssClass: 'fa fa-star'},
            {title: '第三方应用管理', link: 'access-application-list', cssClass: 'fa fa-star-o'},
            {title: '用户权限管理', link: 'user-list', cssClass: 'fa fa-user'},
            {title: '授权验证管理', link: 'oauth-application-list', cssClass: 'fa fa-lock'}
        ],
        QYweixin: [
            {title: '发消息', link: 'send-message-edit', cssClass: 'fa fa-comment'},
            {title: '通讯录管理', link: 'contacts-management', cssClass: 'fa fa-phone'},
            {title: '授权管理', link: 'auth-management-edit', cssClass: 'fa fa-user'},
            {link: 'tag-management'},
            {link: 'home'}
        ],
        weixin: [
            {title: '发消息', link: 'send-message-edit', cssClass: 'fa fa-comment'},
            {title: '授权管理', link: 'auth-management-edit', cssClass: 'fa fa-user'},
            {title: '微信自定义菜单', link: 'weixin-menu-setting', cssClass: 'fa fa-list-ul'},
            {link: 'home'}
        ],
        Alipay: [
            {title: '发消息', link: 'send-message-edit', cssClass: 'fa fa-comment'},
            {title: '授权管理', link: 'auth-management-edit', cssClass: 'fa fa-user'},
            {link: 'home'}
        ],
        QQ: [
            {title: '发消息', link: 'send-message-edit', cssClass: 'fa fa-comment'},
            {title: '授权管理', link: 'auth-management-edit', cssClass: 'fa fa-user'},
            {title: 'QQ自定义菜单', link: 'menu-setting', cssClass: 'fa fa-list-ul'},
            {link: 'home'}
        ],
    };

    user.getSidebarMenus = function(role, channel) {
        if ('admin' == role) {
            return sidebarMenus[role] || [];
        } else {
            return sidebarMenus[channel] || [];
        }
    };

    user.initCheck = function() {
        
        console.log(user);
        getUserSession(user);

    //     if ('operator' === user.userInfo.role) {
    //         if (0 === user.userInfo.data.length) {
    //             alert('当前用户没有可管理的应用，请联系管理员进行授权！');
    //             $location.path('/login');
    //             return;
    //         } else {
    //             user.currentApp = localStorageService.get('currentApp') || user.userInfo.data[0];
    //             console.log(user);
    //         }
    //     }

    //     $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
    //         var restrictedPage;
    //         console.log(toState.name);
    //         console.log(user);
    //         console.log(localStorageService.get('returnToState'));
    //         if (null != localStorageService.get('returnToState')) {
    //             $location.path(localStorageService.get('returnToState'));
    //             localStorageService.remove('returnToState');

    //         };

    //         $.inArray(toState.name, ['login']) === -1 ? restrictedPage = true : restrictedPage = false;

    //         $rootScope.showSideAndHead = restrictedPage;

    //         if (restrictedPage && !(inUrlArray(toState.name, sidebarMenus.admin) === -1) && user.userInfo.role != 'admin') {
    //             $rootScope.showSideAndHead = true;
    //             $rootScope.returnToState = toState.url;
    //             $location.path('/login');
    //         } else if (restrictedPage && user.userInfo.role != 'operator' && (inUrlArray(toState.name, sidebarMenus.admin) === -1)) {
    //             $rootScope.showSideAndHead = true;
    //             localStorageService.set('returnToState', toState.url);
    //             $window.location.href = '/user/sso';
                
    //             return;
    //         } else if (restrictedPage && inUrlArray(toState.name, sidebarMenus.admin) === -1 && user.userInfo.role == 'operator' && (inUrlArray(toState.name, sidebarMenus[user.currentApp.channel]) === -1)) {
    //             if ('' == fromState.name) {
    //                 $location.path('/send-message-edit');
    //             } else {
    //                 alert('没有权限！');
    //                 event.preventDefault();
    //             }
    //         }

    //     });
    };

    return user;
};

function getUserSession(user) {
    $.ajax({
            url: "/user/sys/check",
            async: false,
            success: function(data) {
                if (data.respCode === '1000') {
                    user.userInfo = {
                        username: data.username,
                        role: data.role,
                        data: data.data
                    };
                }
            }
        });
}

function inUrlArray(name, arr){
    return _.findIndex(arr, function(o) {

        return o.link == name; 

    });
}
