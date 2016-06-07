var userListCtrl = require('./userListCtrl.js');
require('./style.styl');
require('widgets/editUser');
require('widgets/confirmPopup');
var mod = angular.module('app.userList', ['app.editUser', 'app.confirmPopup']);
mod.controller('userListCtrl', ['$stateParams', '$rootScope', '$uibModal', '$timeout', '$resource', '$filter', 'ngTableParams', 'variableService', userListCtrl]);
module.exports = mod;