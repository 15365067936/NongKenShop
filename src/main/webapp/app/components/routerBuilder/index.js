angular.module('app').config(['$stateProvider', '$urlRouterProvider', 'localStorageServiceProvider', function($stateProvider, $urlRouterProvider, localStorageServiceProvider) {

    localStorageServiceProvider
        .setPrefix('iag')
        .setStorageType('localStorage')
        .setNotify(true, true)

//    $urlRouterProvider.otherwise(function($injector, $location) {
//        var $state = $injector.get('$state');
//        $state.go('home');
//    });
    $stateProvider.state('application-list', {
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
        }).state('goods-category', {
            url: "/goods-category",
            templateUrl: require("file!../pages/goodsCategory/template.html"),
            controller: 'goodsCategoryCtrl',
            resolve: ['$q', '$ocLazyLoad', function($q, $ocLazyLoad) {
                var deferred = $q.defer();

                require.ensure([], function(require) {
                    var mod = require('pages/goodsCategory');
                    $ocLazyLoad.load({
                        name: mod.name,
                    });

                    deferred.resolve(mod.controller);
                });

                return deferred.promise;
            }]
        }).state('goods-category-type', {
            url: "/goods-category-type:category",
            templateUrl: require("file!../pages/goodsCategoryType/template.html"),
            controller: 'categoryTypeCtrl',
            resolve: ['$q', '$ocLazyLoad', function($q, $ocLazyLoad) {
                var deferred = $q.defer();

                require.ensure([], function(require) {
                    var mod = require('pages/goodsCategoryType');
                    $ocLazyLoad.load({
                        name: mod.name,
                    });

                    deferred.resolve(mod.controller);
                });

                return deferred.promise;
            }]
        });
}]);
