webpackJsonp([12],{

/***/ 189:
/***/ function(module, exports, __webpack_require__) {

	var controller = __webpack_require__(190);
	__webpack_require__(191);
	var mod = angular.module('app.login', []);
	mod.controller('loginCtrl', ['$rootScope', '$scope', '$location', '$resource', 'userService', controller]);
	module.exports = mod;


/***/ },

/***/ 190:
/***/ function(module, exports) {

	module.exports = function($rootScope, $scope, $location, $resource, userService) {  
	    $scope.login = function($event) {
	        
	        var url = $location.$$absUrl;

	        var authData = {
	            username: $scope.username,
	            password: $scope.password
	        };

	        $resource('/user/login').save(authData).$promise.then(function(data) {
	            console.log(data);
	            if (data.respCode == 1000) {
	                userService.userInfo = {
	                    username: $scope.username,
	                    role: 'admin'
	                };
	                $rootScope.showSideAndHead = true;
	                $location.path($rootScope.returnToState || '/access-application-list');
	            } else {
	                alert(data.respMsg);
	            }
	        });
	        
	    }
	}

/***/ },

/***/ 191:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(192);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(14)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/stylus-loader/index.js!./style.styl", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/stylus-loader/index.js!./style.styl");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 192:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports


	// module
	exports.push([module.id, ".margin-top {\n  margin-top: 10px;\n}\n", ""]);

	// exports


/***/ }

});