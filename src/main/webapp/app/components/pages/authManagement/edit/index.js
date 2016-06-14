var userListCtrl = require('./editCtrl.js');
require('./style.styl');
require('widgets/authManagement/addEdit');
require('widgets/authManagement/delete');
var mod = angular.module('app.authManagementEdit', ['app.addAuthUser', 'app.deleteAuthUser']);
mod.controller('authManagementEditCtrl', ['$stateParams', '$rootScope', '$uibModal', '$timeout', '$resource', '$filter', 'ngTableParams', 'userService', userListCtrl]);
module.exports = mod;