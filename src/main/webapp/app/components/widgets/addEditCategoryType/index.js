var editCategoryType = require('./editCategoryTypeCtrl.js');
require('./style.styl');
var mod = angular.module('app.editCategoryType', []);
mod.controller('editCategoryType', ['$scope', '$uibModalInstance', '$resource', 'method', 'currentCategoryType', editCategoryType]);
module.exports = mod;