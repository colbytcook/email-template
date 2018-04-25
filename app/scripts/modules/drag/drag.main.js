const dragula = require('dragula')
const EditLink = require('../editLink/editLink.main.js');
const CopyLink = require('../copyLink/copyLink.main.js');
const DeleteLink = require('../deleteLink/deleteLink.main.js');

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
      const editLink = new EditLink(el)
      const copyLink = new CopyLink(el)
      const deleteLink = new DeleteLink(el)
    })
  }
}
