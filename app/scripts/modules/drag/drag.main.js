const dragula = require('dragula')
const Block = require('../block/block.js')

module.exports = class Drag {
  constructor(el){
    this.el = el
    
    const drake = dragula([document.querySelector('#toolbarArea'), document.querySelector('#headerArea') , document.querySelector('#contentArea'), document.querySelector('#footerArea')], {
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
    drake.on('drop', (el) => {
     const block = new Block(el)
    })
  }
}
