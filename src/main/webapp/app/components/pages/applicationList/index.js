var applicationListCtrl = require('./applicationListCtrl.js');
require('./style.css');
require('widgets/addEditApplication');
require('widgets/confirmPopup');
var mod = angular.module('app.applicationList', ['app.addEditApplication', 'app.confirmPopup']);
mod.controller('applicationListCtrl', ['$stateParams', 'Upload', '$rootScope', '$uibModal', '$timeout', '$resource', '$filter', 'ngTableParams', 'variableService' , 'userService', applicationListCtrl]);
module.exports = mod;