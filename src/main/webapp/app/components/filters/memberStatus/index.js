var service = require('./memberStatus.js');
var mod = angular.module('app.memberStatus', []);
mod.filter('memberStatus', service);
module.exports = mod;