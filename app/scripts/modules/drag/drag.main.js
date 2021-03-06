const dragula = require('dragula')
const Block = require('../block/block.js')
import {utilities} from '../utilities/utilities.js'

module.exports = class Drag {
  constructor(el){
    this.el = el
    const drake = dragula([document.querySelector('#dragArea'), document.querySelector('#contentArea')], {
      copy: (el, source) => source === document.querySelector('#dragArea'),
      accepts: (el, target) => target !== document.querySelector('#dragArea'),
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
