var service = require('./utilService.js');
var mod = angular.module('app.utilService', []);
mod.factory('utilService', service);
module.exports = mod;