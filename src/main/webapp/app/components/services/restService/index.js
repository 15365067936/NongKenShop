var service = require('./restService.js');
var mod = angular.module('app.restService', []);
mod.factory('restService', ['$http', service]);
module.exports = mod;