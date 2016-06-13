var deleteUserCtrl = require('./controller.js');
var mod = angular.module('app.deleteAuthUser', []);
mod.controller('deleteAuthUserCtrl', ['$rootScope', '$uibModalInstance', '$resource', 'ngTableParams', 'params', 'method', deleteUserCtrl]);
module.exports = mod;