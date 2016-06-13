var service = require('./service.js');
var mod = angular.module('app.variableService', []);
mod.factory('variableService', ['$rootScope', '$window', service]);
module.exports = mod;