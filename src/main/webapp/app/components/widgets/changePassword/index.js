var changePasswordCtrl = require('./changePasswordCtrl.js');
var mod = angular.module('app.changePasswordCtrl', []);
mod.controller('changePasswordCtrl', ['$scope', '$uibModalInstance', '$resource', 'currentUser', changePasswordCtrl]);
module.exports = mod;