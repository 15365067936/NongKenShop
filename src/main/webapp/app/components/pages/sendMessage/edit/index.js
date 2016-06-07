var controller = require('./editCtrl.js');
require('./style.styl');
require('widgets/addSendMsgUser');
var mod = angular.module('app.sendMessageEdit', ['app.addSendMsgUser']);
mod.controller('sendMessageEditCtrl', ['$scope', '$stateParams', '$location', '$resource', '$uibModal', 'userService', controller]);
module.exports = mod;
