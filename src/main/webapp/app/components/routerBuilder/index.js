angular.module('app').config(['$stateProvider', '$urlRouterProvider', 'localStorageServiceProvider', function($stateProvider, $urlRouterProvider, localStorageServiceProvider) {

    localStorageServiceProvider
        .setPrefix('iag')
        .setStorageType('localStorage')
        .setNotify(true, true)

//    $urlRouterProvider.otherwise(function($injector, $location) {
//        var $state = $injector.get('$state');
//        $state.go('home');
//    });
    $stateProvider.state('goods-list', {
            url: "/goods-list",
            templateUrl: require("file!../pages/goods/list/template.html"),
            controller: 'goodsListCtrl',
            resolve: ['$q', '$ocLazyLoad', function($q, $ocLazyLoad) {
                var deferred = $q.defer();

                require.ensure([], function(require) {
                    var mod = require('pages/goods/list');
                    $ocLazyLoad.load({
                        name: mod.name,
                    });

                    deferred.resolve(mod.controller);
                });

                return deferred.promise;
            }]
        }).state('goods-form', {
            url: "/goods-form:goodsId",
            templateUrl: require("file!../pages/goods/form/goodsForm.html"),
            controller: 'goodsFormCtrl',
            resolve: ['$q', '$ocLazyLoad', function($q, $ocLazyLoad) {
                var deferred = $q.defer();

                require.ensure([], function(require) {
                    var mod = require('pages/goods/form');
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
        }).state('myinfo', {
            url: "/myinfo",
            templateUrl: require("file!../pages/myinfo/myinfo.html"),
            controller: 'myInfoCtrl',
            resolve: ['$q', '$ocLazyLoad', function($q, $ocLazyLoad) {
                var deferred = $q.defer();

                require.ensure([], function(require) {
                    var mod = require('pages/myinfo');
                    $ocLazyLoad.load({
                        name: mod.name,
                    });

                    deferred.resolve(mod.controller);
                });

                return deferred.promise;
            }]
        }).state('order-manager', {
            url: "/order-manager",
            templateUrl: require("file!../pages/orderManager/orderManager.html"),
            controller: 'orderManegerCtrl',
            resolve: ['$q', '$ocLazyLoad', function($q, $ocLazyLoad) {
                var deferred = $q.defer();

                require.ensure([], function(require) {
                    var mod = require('pages/orderManager');
                    $ocLazyLoad.load({
                        name: mod.name,
                    });

                    deferred.resolve(mod.controller);
                });

                return deferred.promise;
            }]
        }).state('order-detail', {
            url: "/order-detail:order",
            templateUrl: require("file!../pages/orderDetail/orderDetail.html"),
            controller: 'orderDetailCtrl',
            resolve: ['$q', '$ocLazyLoad', function($q, $ocLazyLoad) {
                var deferred = $q.defer();

                require.ensure([], function(require) {
                    var mod = require('pages/orderDetail');
                    $ocLazyLoad.load({
                        name: mod.name,
                    });

                    deferred.resolve(mod.controller);
                });

                return deferred.promise;
            }]
        });
}]);
