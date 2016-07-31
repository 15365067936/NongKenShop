var editOrderCtrl = require('./editOrderCtrl.js');
require('./style.styl');
var mod = angular.module('app.editOrderCtrl', []);
mod.controller('editOrderCtrl', ['$scope', '$uibModalInstance', '$resource', 'currentOrder', editOrderCtrl]);
module.exports = mod;