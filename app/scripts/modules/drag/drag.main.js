import events from '../../libs/sub-pub.js'
const dragula = require('dragula')

module.exports = class Drag {
  constructor(el){
    this.el = el
    
    dragula([document.querySelector('#toolbarArea'), document.querySelector('#headerArea') , document.querySelector('#contentArea'), document.querySelector('#footerArea')], {
      copy: (el, source) => source === document.querySelector('#toolbarArea'),
      accepts: (el, target) => target !== document.querySelector('#toolbarArea'),
      invalid: (el, handle) => false,
      direction: 'vertical',
      copySortSource: false,
      revertOnSpill: true, 
      removeOnSpill: true,
      mirrorContainer: document.body,
      ignoreInputTextSelection: true
    });
  }
}
