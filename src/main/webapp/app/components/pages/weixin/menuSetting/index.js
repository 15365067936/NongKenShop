var controller = require('./controller.js');
require('./css/inline.css');
require('./css/menu.css');
require('widgets/confirmPopup');
var mod = angular.module('app.weixinMenuSetting', ['app.confirmPopup']);
mod.controller('weixinMenuSettingCtrl', ['$scope', '$resource', '$uibModal', 'userService', controller]);
module.exports = mod;