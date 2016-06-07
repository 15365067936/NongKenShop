var contactsManagementCtrl = require('./contactsManagementCtrl.js');
require('./style.styl');
require('widgets/addEditDepartment');
require('widgets/confirmPopup');
require('widgets/addEditDepartmentUser');
var mod = angular.module('app.contactsManagement', ['app.addEditDepartment', 'app.confirmPopup', 'app.addEditDepartmentUser']);
mod.controller('contactsManagementCtrl', ['$rootScope', '$stateParams', '$rootScope', '$uibModal', '$timeout', '$resource', '$filter', 'ngTableParams', 'userService', contactsManagementCtrl]);
module.exports = mod;