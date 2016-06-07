var editUserCtrl = require('./editUserCtrl.js');
require('./style.styl');
var mod = angular.module('app.editUser', []);
mod.controller('editUserCtrl', ['$scope', '$uibModalInstance', 'method', 'currentUser', editUserCtrl]);
module.exports = mod;