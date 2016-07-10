jQuery = $ = require('jquery');
_ = require('lodash');
__ = require('underscore');
require('bootstrap/dist/css/bootstrap.min.css');
require('bootstrap/dist/js/bootstrap.min.js');
require('font-awesome/css/font-awesome.min.css');
require('ng-table.min.css');
require('core');

require('angular').module('app', [
        require('angular-ui-router'),
        require('ocLazyLoad'),
        require('angular-ui-bootstrap'),
        require('angular-resource'),
        require('angular-ui-tree'),
        require('ng-file-upload'),
        require('angular-local-storage'),
        require('services/util').name,
        require('services/variableService').name,
        require('services/userService').name,
        require('directives/adminHeader').name,
        require('directives/adminSidebar').name,
        require('directives/iagEnter').name,
        require('directives/menuEdit').name,
        require('ng-table.js').name,
        require('filters/memberStatus').name,
        require('filters/userType').name,
        require('filters/userStatus').name,
        'uiSwitch'
    ]).run(['$rootScope', '$location','$state' ,'$window' ,'userService', 
            function($rootScope, $location, $state, $window, userService) {
                userService.initCheck();
            }
    ]);
require('angular-ui-switch2/angular-ui-switch.min.js');
require('angular-ui-switch2/angular-ui-switch.min.css');   
require('routerBuilder');

angular.bootstrap(document.body, ['app']);

