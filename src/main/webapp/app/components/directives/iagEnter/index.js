var directive = require('./directive.js');
var mod = angular.module('app.iagEnterDirective', []);
mod.directive('iagEnter', directive);
module.exports = mod;