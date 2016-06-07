var helloworldCtrl = require('./helloworldCtrl.js');
require('./style.css');
var mod = angular.module('app.helloworld', ['app.utilService']);
mod.controller('helloworldCtrl', ['$rootScope',
    'utilService', helloworldCtrl
]);
module.exports = mod;
