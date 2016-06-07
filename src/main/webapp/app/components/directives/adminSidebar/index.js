var directive = require('./sidebarDirective.js');
var mod = angular.module('app.sidebarDirective', []);
mod.directive('adminSidebar', ['userService', directive]);
module.exports = mod;