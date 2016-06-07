var controller = require('./controller.js');
require('./style.styl');
var mod = angular.module('app.addAuthUser', []);
mod.controller('addAuthUserCtrl', ['$scope', '$uibModalInstance', '$resource', 'ngTableParams', 'params', 'method', controller]);
module.exports = mod;