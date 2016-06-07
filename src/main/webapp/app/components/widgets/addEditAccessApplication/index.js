var controller = require('./controller.js');
var mod = angular.module('app.addEditAccessApplication', []);
mod.controller('addEditAccessApplicationCtrl', ['$scope', '$uibModalInstance', '$resource', 'ngTableParams', 'method', 'currentAccessApplication', 'variableService', controller]);
module.exports = mod;