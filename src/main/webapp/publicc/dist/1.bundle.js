webpackJsonp([1],{

/***/ 81:
/***/ function(module, exports, __webpack_require__) {

	var helloworldCtrl = __webpack_require__(82);
	__webpack_require__(83);
	var mod = angular.module('app.helloworld', ['app.utilService']);
	mod.controller('helloworldCtrl', ['$rootScope',
	    'utilService', helloworldCtrl
	]);
	module.exports = mod;


/***/ },

/***/ 82:
/***/ function(module, exports) {

	// moduleA.js
	module.exports = function($rootscope, utilService){
	 
	     console.log('hello!');
	}

/***/ },

/***/ 83:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(84);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(14)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./style.css", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./style.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 84:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ }

});