var controller = require('./controller.js');
var mod = angular.module('app.confirmPopup', []);
require('./style.css');
mod.controller('confirmPopupCtrl', ['$scope', '$uibModalInstance', 'message', controller]);
module.exports = mod;