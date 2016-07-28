var categoryTypeCtrl = require('./controller.js');
require('./style.styl');
require('widgets/addEditCategoryType');
require('widgets/confirmPopup');
var mod = angular.module('app.categoryTypeCtrl', ['app.editCategoryType', 'app.confirmPopup']);
mod.controller('categoryTypeCtrl', ['$stateParams', '$rootScope', '$uibModal', '$timeout', '$resource', '$filter', 'ngTableParams', categoryTypeCtrl]);
module.exports = mod;