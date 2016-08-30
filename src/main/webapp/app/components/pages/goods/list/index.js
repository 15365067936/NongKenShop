var goodsListCtrl = require('./goodsListCtrl.js');
require('./style.css');
require('widgets/addEditApplication');
require('widgets/confirmPopup');
var mod = angular.module('app.goodsList', ['app.addEditApplication', 'app.confirmPopup']);
mod.controller('goodsListCtrl', ['$stateParams', 'Upload', '$rootScope', '$uibModal', '$timeout', '$resource', '$filter', 'ngTableParams', 'variableService' , 'userService', goodsListCtrl]);
module.exports = mod;