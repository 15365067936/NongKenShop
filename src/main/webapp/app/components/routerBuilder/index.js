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
        .state('user-list', {
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
        }).state('goods-list', {
            url: "/goods-list",
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
