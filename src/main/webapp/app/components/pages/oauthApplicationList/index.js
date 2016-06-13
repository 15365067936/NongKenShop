var controller = require('./controller.js');
console.log(controller);
require('./style.styl');
require('widgets/oauthApplication/addEdit');
require('widgets/confirmPopup');
var mod = angular.module('app.oauthApplicationList', ['app.addEditOauthApplication', 'app.confirmPopup']);
mod.controller('oauthApplicationListCtrl', ['$stateParams', '$rootScope', '$uibModal', '$timeout', '$resource', '$filter', 'ngTableParams', controller]);
module.exports = mod;