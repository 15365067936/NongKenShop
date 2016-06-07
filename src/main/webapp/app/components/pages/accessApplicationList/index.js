var accessApplicationListCtrl = require('./accessApplicationListCtrl.js');
require('./style.styl');
require('widgets/addEditAccessApplication');
require('widgets/confirmPopup');
var mod = angular.module('app.accessApplicationList', ['app.addEditAccessApplication', 'app.confirmPopup']);
mod.controller('accessApplicationListCtrl', ['$stateParams', '$rootScope', '$uibModal', '$timeout', '$resource', '$filter', 'ngTableParams', accessApplicationListCtrl]);
module.exports = mod;