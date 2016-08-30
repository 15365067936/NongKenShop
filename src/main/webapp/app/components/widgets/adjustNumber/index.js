var controller = require('./controller.js');
require('./style.styl');
var mod = angular.module('app.adjustDetailNumber', []);
mod.controller('adjustDetailNumber', ['$scope', '$uibModalInstance', '$resource', 'ngTableParams', 'currentDetail', 'variableService', 'userService', controller]);
module.exports = mod;