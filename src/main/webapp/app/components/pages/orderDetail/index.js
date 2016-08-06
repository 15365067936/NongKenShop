var orderDetailCtrl = require('./orderDetail.js');
require('./style.styl');
var mod = angular.module('app.orderDetailCtrl', []);
mod.controller('orderDetailCtrl', ['$stateParams', '$rootScope', '$uibModal', '$timeout', '$resource', '$filter', 'ngTableParams', 'variableService' , 'userService', 'userService', orderDetailCtrl]);
module.exports = mod;