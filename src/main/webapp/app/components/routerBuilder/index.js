angular.module('app').config(['$stateProvider', '$urlRouterProvider', 'localStorageServiceProvider', function($stateProvider, $urlRouterProvider, localStorageServiceProvider) {

    localStorageServiceProvider
        .setPrefix('iag')
        .setStorageType('localStorage')
        .setNotify(true, true)

    $urlRouterProvider.otherwise(function($injector, $location) {
        var $state = $injector.get('$state');
        $state.go('home');
    });
    $stateProvider
    .state('home', {
            url: "/home",
            templateUrl: require("file!../pages/helloworld/template.html"),
            controller: 'helloworldCtrl',
            resolve: ['$q', '$ocLazyLoad', function($q, $ocLazyLoad) {
                var deferred = $q.defer();

                require.ensure([], function(require) {
                    var mod = require('pages/helloworld');
                    $ocLazyLoad.load({
                        name: mod.name,
                    });

                    deferred.resolve(mod.controller);
                });

                return deferred.promise;
            }]
        })
        // .state('home', {
        //     url: "/home",
        //     templateUrl: require("file!../pages/helloworld/template.html"),
        //     controller: 'helloworldCtrl'
        //     resolve: ['$q', '$ocLazyLoad', function($q, $ocLazyLoad) {
        //         var deferred = $q.defer();

        //         require.ensure([], function(require) {
        //             var mod = require('pages/helloworld');
        //             $ocLazyLoad.load({
        //                 name: mod.name,
        //             });

        //             deferred.resolve(mod.controller);
        //         });

        //         return deferred.promise;
        //     }]
        // })
        .state('menu-setting', {
            url: "/menu-setting",
            templateUrl: require("file!../pages/menuSetting/template.html"),
            controller: 'menuSettingCtrl',
            resolve: ['$q', '$ocLazyLoad', function($q, $ocLazyLoad) {
                var deferred = $q.defer();

                require.ensure([], function(require) {
                    var mod = require('pages/menuSetting');
                    $ocLazyLoad.load({
                        name: mod.name,
                    });

                    deferred.resolve(mod.controller);
                });

                return deferred.promise;
            }]
        }).state('weixin-menu-setting', {
            url: "/weixin-menu-setting",
            templateUrl: require("file!../pages/weixin/menuSetting/template.html"),
            controller: 'weixinMenuSettingCtrl',
            resolve: ['$q', '$ocLazyLoad', function($q, $ocLazyLoad) {
                var deferred = $q.defer();

                require.ensure([], function(require) {
                    var mod = require('pages/weixin/menuSetting');
                    $ocLazyLoad.load({
                        name: mod.name,
                    });

                    deferred.resolve(mod.controller);
                });

                return deferred.promise;
            }]
        }).state('tag-management', {
            url: "/tag-management",
            templateUrl: require("file!../pages/tagManagement/template.html"),
            controller: 'tagManagementCtrl',
            resolve: ['$q', '$ocLazyLoad', function($q, $ocLazyLoad) {
                var deferred = $q.defer();

                require.ensure([], function(require) {
                    var mod = require('pages/tagManagement');
                    $ocLazyLoad.load({
                        name: mod.name,
                    });
                    deferred.resolve(mod.controller);
                });

                return deferred.promise;
            }]
        }).state('application-list', {
            url: "/application-list:applicationId",
            templateUrl: require("file!../pages/applicationList/template.html"),
            controller: 'applicationListCtrl',
            resolve: ['$q', '$ocLazyLoad', function($q, $ocLazyLoad) {
                var deferred = $q.defer();

                require.ensure([], function(require) {
                    var mod = require('pages/applicationList');
                    $ocLazyLoad.load({
                        name: mod.name,
                    });

                    deferred.resolve(mod.controller);
                });

                return deferred.promise;
            }]
        }).state('detail-goods-list', {
            url: "/detail-goods-list:good",
            templateUrl: require("file!../pages/detailGoodsList/template.html"),
            controller: 'detailGoodsListCtrl',
            resolve: ['$q', '$ocLazyLoad', function($q, $ocLazyLoad) {
                var deferred = $q.defer();

                require.ensure([], function(require) {
                    var mod = require('pages/detailGoodsList');
                    $ocLazyLoad.load({
                        name: mod.name,
                    });

                    deferred.resolve(mod.controller);
                });

                return deferred.promise;
            }]
        }).state('access-application-list', {
            url: "/access-application-list",
            templateUrl: require("file!../pages/accessApplicationList/template.html"),
            controller: 'accessApplicationListCtrl',
            resolve: ['$q', '$ocLazyLoad', function($q, $ocLazyLoad) {
                var deferred = $q.defer();

                require.ensure([], function(require) {
                    var mod = require('pages/accessApplicationList');
                    $ocLazyLoad.load({
                        name: mod.name,
                    });

                    deferred.resolve(mod.controller);
                });

                return deferred.promise;
            }]
        }).state('oauth-application-list', {
            url: "/oauth-application-list",
            templateUrl: require("file!../pages/oauthApplicationList/template.html"),
            controller: 'oauthApplicationListCtrl',
            resolve: ['$q', '$ocLazyLoad', function($q, $ocLazyLoad) {
                var deferred = $q.defer();

                require.ensure([], function(require) {
                    var mod = require('pages/oauthApplicationList');
                    console.log(mod)
                    $ocLazyLoad.load({
                        name: mod.name,
                    });

                    deferred.resolve(mod.controller);
                });

                return deferred.promise;
            }]
        }).state('user-list', {
            url: "/user-list",
            templateUrl: require("file!../pages/userList/template.html"),
            controller: 'userListCtrl',
            resolve: ['$q', '$ocLazyLoad', function($q, $ocLazyLoad) {
                var deferred = $q.defer();

                require.ensure([], function(require) {
                    var mod = require('pages/userList');
                    $ocLazyLoad.load({
                        name: mod.name,
                    });

                    deferred.resolve(mod.controller);
                });

                return deferred.promise;
            }]
        }).state('contacts-management', {
            url: "/contacts-management",
            templateUrl: require("file!../pages/contactsManagement/template.html"),
            controller: 'contactsManagementCtrl',
            resolve: ['$q', '$ocLazyLoad', function($q, $ocLazyLoad) {
                var deferred = $q.defer();

                require.ensure([], function(require) {
                    var mod = require('pages/contactsManagement');
                    $ocLazyLoad.load({
                        name: mod.name,
                    });

                    deferred.resolve(mod.controller);
                });

                return deferred.promise;
            }]
        }).state('send-message-edit', {
            url: "/send-message-edit",
            templateUrl: require("file!../pages/sendMessage/edit/template.html"),
            controller: 'sendMessageEditCtrl',
            params: {
                currentApp: {}
            },
            resolve: ['$q', '$ocLazyLoad', function($q, $ocLazyLoad) {
                var deferred = $q.defer();

                require.ensure([], function(require) {
                    var mod = require('pages/sendMessage/edit');
                    $ocLazyLoad.load({
                        name: mod.name,
                    });

                    deferred.resolve(mod.controller);
                });

                return deferred.promise;
            }]
        }).state('auth-management-edit', {
            url: "/auth-management-edit/",
            templateUrl: require("file!../pages/authManagement/edit/template.html"),
            controller: 'authManagementEditCtrl',
            params: {
                currentApp: {}
            },
            resolve: ['$q', '$ocLazyLoad', function($q, $ocLazyLoad) {
                var deferred = $q.defer();

                require.ensure([], function(require) {
                    var mod = require('pages/authManagement/edit');
                    $ocLazyLoad.load({
                        name: mod.name,
                    });

                    deferred.resolve(mod.controller);
                });

                return deferred.promise;
            }]
        }).state('login', {
            url: "/login",
            templateUrl: require("file!../pages/login/template.html"),
            controller: 'loginCtrl',
            resolve: ['$q', '$ocLazyLoad', function($q, $ocLazyLoad) {
                var deferred = $q.defer();

                require.ensure([], function(require) {
                    var mod = require('pages/login');
                    $ocLazyLoad.load({
                        name: mod.name,
                    });

                    deferred.resolve(mod.controller);
                });

                return deferred.promise;
            }]
        });
}]);
