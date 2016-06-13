var controller = require('./controller.js');
require('./style.styl');
var mod = angular.module('app.addEditApplication', []);
mod.controller('addEditApplicationCtrl', ['$scope', '$uibModalInstance', '$resource', 'ngTableParams', 'method', 'currentApplication', 'variableService', controller]);
module.exports = mod;