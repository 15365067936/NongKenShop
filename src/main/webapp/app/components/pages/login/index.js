var controller = require('./loginCtrl.js');
require('./style.styl');
var mod = angular.module('app.login', []);
mod.controller('loginCtrl', ['$rootScope', '$scope', '$location', '$resource', 'userService', controller]);
module.exports = mod;
