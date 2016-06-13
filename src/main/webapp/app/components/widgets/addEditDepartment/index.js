var controller = require('./addEditDepartmentCtrl.js');
var mod = angular.module('app.addEditDepartment', []);
mod.controller('addEditDepartmentCtrl', ['$scope', '$uibModalInstance', '$resource', 'ngTableParams', 'method', 'currentDepartment', controller]);
module.exports = mod;