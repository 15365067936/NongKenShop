var myInfoCtrl = require('./myinfo.js');
require('widgets/changePassword');
var mod = angular.module('app.myInfoCtrl', ['app.changePasswordCtrl']);
mod.controller('myInfoCtrl', ['$stateParams', '$rootScope', '$uibModal', '$timeout', '$resource', '$filter', 'ngTableParams', 'variableService', myInfoCtrl]);
module.exports = mod;