var controller = require('./controller.js');
var mod = angular.module('app.addEditOauthApplication', []);
mod.controller('addEditOauthApplicationCtrl', ['$scope', '$uibModalInstance', '$resource', 'ngTableParams', 'method', 'currentApplication', controller]);
module.exports = mod;