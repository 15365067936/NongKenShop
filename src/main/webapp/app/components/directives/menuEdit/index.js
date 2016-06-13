var directive = require('./directive.js');
var mod = angular.module('app.menuEditDirective', []);
mod.directive('menuEdit', ['userService', directive]);
module.exports = mod;