var controller = require('./controller.js');
require('./style.styl');
var mod = angular.module('app.addEditDetailGoods', []);
mod.controller('addEditDetailGoodsCtrl', ['$scope', '$uibModalInstance', '$resource', 'ngTableParams', 'method', 'currentApplication', 'variableService', 'userService', controller]);
module.exports = mod;