var controller = require('./controller.js');
require('./style.styl');
var mod = angular.module('app.addEditApplication', []);
mod.controller('addEditApplicationCtrl', ['$scope', 'Upload', '$uibModalInstance', '$resource', 'ngTableParams', 'method', 'currentApplication', 'variableService', 'userService', controller]);
module.exports = mod;