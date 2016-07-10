var controller = require('./controller.js');
require('./style.css');
require('widgets/addEditDetailGoods');
require('widgets/confirmPopup');
var mod = angular.module('app.detailGoodsList', ['app.addEditDetailGoods', 'app.confirmPopup']);
mod.controller('detailGoodsListCtrl', ['$stateParams', '$rootScope', '$uibModal', '$timeout', '$resource', '$filter', 'ngTableParams', 'variableService', controller]);
module.exports = mod;