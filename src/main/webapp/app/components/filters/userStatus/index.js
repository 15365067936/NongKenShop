var service = require('./filter.js');
var mod = angular.module('app.userStatus', []);
mod.filter('userStatus', service);
module.exports = mod;