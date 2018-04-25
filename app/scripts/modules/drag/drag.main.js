const dragula = require('dragula')

module.exports = class Drag {
  constructor(el){
    this.el = el
    
    dragula([document.querySelector('#toolbarArea'), document.querySelector('#headerArea') , document.querySelector('#contentArea'), document.querySelector('#footerArea')], {
      isContainer: function (el) {
        console.log(el);
        
        return false; 
      },
      moves: function (el, source, handle, sibling) {
        // console.log(el);
        // console.log(source);
        // console.log(handle);
        // console.log(sibling);
        
        
        return true;
      },
      accepts: function (el, target, source, sibling) {
        // console.log(el);
        // console.log(source);
        // console.log(target);
        // console.log(sibling);

        return true;
      },
      invalid: function (el, handle) {
        return false;
      },
      direction: 'vertical',
      copy: true,
      copySortSource: false,
      revertOnSpill: false, 
      removeOnSpill: false,
      mirrorContainer: document.body,
      ignoreInputTextSelection: true
    });
  }
}
