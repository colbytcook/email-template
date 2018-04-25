webpackJsonp([6],{

/***/ 13:
/***/ (function(module, exports) {

	'use strict';
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	module.exports = function EditLink(el) {
	  _classCallCheck(this, EditLink);
	
	  this.el = el;
	  this.el.addEventListener('click', function (e) {
	    e.preventDefault();
	    var editClass = 'editing';
	    var block = e.currentTarget.parentNode.parentNode;
	    block;
	    if (block.classList) {
	      block.classList.add(editClass);
	    } else {
	      block.className += ' ' + editClass;
	    }
	  });
	};

/***/ })

});
//# sourceMappingURL=6.bundle.js.map