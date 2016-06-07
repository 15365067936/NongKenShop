var directive = require('./headerDirective.js');
require('./style.styl');
var mod = angular.module('app.headerDirective', []);
mod.directive('adminHeader', ['userService', 'localStorageService', directive]);
module.exports = mod; 