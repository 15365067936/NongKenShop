var controller = require('./addSendMsgUserCtrl.js');
require('./style.styl');
var mod = angular.module('app.addSendMsgUser', []);
mod.controller('addSendMsgUserCtrl', ['$scope', '$uibModalInstance', '$resource', 'ngTableParams', 'method', controller]);
module.exports = mod;