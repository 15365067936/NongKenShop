var service = require('./filter.js');
var mod = angular.module('app.userType', []);
mod.filter('userType', service);
module.exports = mod;