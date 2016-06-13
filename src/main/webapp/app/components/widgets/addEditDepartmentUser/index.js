var controller = require('./addEditDepartmentUserCtrl.js');
require('./style.styl');
var mod = angular.module('app.addEditDepartmentUser', []);
mod.controller('addEditDepartmentUserCtrl', ['$scope', '$uibModalInstance', '$resource', 'ngTableParams', 'method', 'currentObj', controller]);
module.exports = mod;