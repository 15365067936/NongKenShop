var controller = require('./controller.js');
require('./style.css');
require('widgets/addEditApplication');
require('widgets/confirmPopup');
var mod = angular.module('app.applicationList', ['app.addEditApplication', 'app.confirmPopup']);
mod.controller('applicationListCtrl', ['$stateParams', '$rootScope', '$uibModal', '$timeout', '$resource', '$filter', 'ngTableParams', 'variableService', applicationListCtrl]);
module.exports = mod;