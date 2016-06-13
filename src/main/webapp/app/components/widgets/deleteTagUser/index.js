var controller = require('./deleteTagUserCtrl.js');
var mod = angular.module('app.deleteTagUser', []);
mod.controller('deleteTagUserCtrl', ['$scope', '$uibModalInstance', '$resource', 'ngTableParams', 'currentUser', controller]);
module.exports = mod;