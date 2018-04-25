webpackJsonp([4],{

/***/ 9:
/***/ (function(module, exports) {

	'use strict';
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	module.exports = function CopyLink(el) {
	  _classCallCheck(this, CopyLink);
	
	  this.el = el;
	  this.el.addEventListener('click', function (e) {
	    e.preventDefault();
	    var block = e.currentTarget.parentNode.parentNode;
	    var blockClone = block.cloneNode(true);
	    block.parentNode.insertBefore(blockClone, block.parentNode.firstChild);
	  });
	};

/***/ })

});
//# sourceMappingURL=4.bundle.js.map