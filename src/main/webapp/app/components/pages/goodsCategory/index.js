var goodsCategoryCtrl = require('./controller.js');
require('./style.styl');
require('widgets/addEditGoodsCategory');
require('widgets/confirmPopup');
var mod = angular.module('app.goodsCategoryCtrl', ['app.editCategory', 'app.confirmPopup']);
mod.controller('goodsCategoryCtrl', ['$stateParams', '$rootScope', '$uibModal', '$timeout', '$resource', '$filter', 'ngTableParams', goodsCategoryCtrl]);
module.exports = mod;