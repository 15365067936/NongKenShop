var editCategory = require('./editGoodsCategoryCtrl.js');
require('./style.styl');
var mod = angular.module('app.editCategory', []);
mod.controller('editCategory', ['$scope', '$uibModalInstance', '$resource', 'method', 'currentCategory', editCategory]);
module.exports = mod;