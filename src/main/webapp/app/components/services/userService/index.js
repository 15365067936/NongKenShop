var service = require('./userService.js');
var mod = angular.module('app.userService', []);
mod.factory('userService', ['$rootScope', '$window', '$location', 'localStorageService', service]);
module.exports = mod;