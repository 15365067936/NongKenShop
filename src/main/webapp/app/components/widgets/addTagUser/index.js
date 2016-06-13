var controller = require('./addTagUserCtrl.js');
require('./style.styl');
var mod = angular.module('app.addTagUser', []);
mod.controller('addTagUserCtrl', ['$scope', '$uibModalInstance', '$resource', 'ngTableParams', 'method', controller]);
module.exports = mod;