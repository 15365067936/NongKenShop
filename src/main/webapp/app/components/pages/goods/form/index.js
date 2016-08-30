var controller = require('./goodsFormCtrl.js');
require('./style.styl');
require('widgets/confirmPopup');
require('widgets/adjustNumber');
var mod = angular.module('app.goodsFormCtrl', ['app.confirmPopup', 'app.adjustDetailNumber']);
mod.controller('goodsFormCtrl', ['$stateParams','$uibModal' , '$rootScope', 'Upload', '$resource', 'ngTableParams', 'variableService', 'userService', controller]);
module.exports = mod;