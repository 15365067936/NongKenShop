var controller = require('./addEditTagCtrl.js');
var mod = angular.module('app.addEditTag', []);
mod.controller('addEditTagCtrl', ['$scope', '$uibModalInstance', '$resource', 'ngTableParams', 'method', 'currentTag', controller]);
module.exports = mod;