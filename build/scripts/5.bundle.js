webpackJsonp([5],{

/***/ 11:
/***/ (function(module, exports) {

	'use strict';
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	module.exports = function DeleteLink(el) {
	  _classCallCheck(this, DeleteLink);
	
	  this.el = el;
	  this.el.addEventListener('click', function (e) {
	    e.preventDefault();
	    var block = e.currentTarget.parentNode.parentNode;
	    block.parentNode.removeChild(block);
	  });
	};

/***/ })

});
//# sourceMappingURL=5.bundle.js.map