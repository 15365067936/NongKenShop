var controller = require('./tagManagementCtrl.js');
require('./style.styl');
require('widgets/addEditTag');
require('widgets/confirmPopup');
require('widgets/addTagUser');
require('widgets/deleteTagUser');
var mod = angular.module('app.tagManagement', ['app.addEditTag', 'app.confirmPopup', 'app.addTagUser', 'app.deleteTagUser']);
mod.controller('tagManagementCtrl', ['$rootScope', '$stateParams', '$scope', '$uibModal', '$timeout', '$resource', '$filter', 'ngTableParams', controller]);
module.exports = mod;