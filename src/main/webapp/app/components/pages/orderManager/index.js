var orderManegerCtrl = require('./orderManagerCtrl.js');
require('./style.css');
require('widgets/editOrder');
require('widgets/confirmPopup');
var mod = angular.module('app.orderManegerCtrl', ['app.editOrderCtrl','app.confirmPopup']);
mod.controller('orderManegerCtrl', ['$stateParams', '$rootScope', '$uibModal', '$timeout', '$resource', '$filter', 'ngTableParams', 'variableService' , 'userService', orderManegerCtrl]);
module.exports = mod;