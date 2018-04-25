const EditDivider = require('../editDivider/editDivider.js')
const EditImage = require('../editImage/editImage.js')
const EditText = require('../editText/editText.js')

module.exports = class Block {
  constructor(el){
    this.el = el
    this.clickEvents(this.el, this)
  }
  copy(e){
    e.preventDefault()
    const block = e.currentTarget.parentNode.parentNode
    const blockClone = block.cloneNode(true)
    block.parentNode.insertBefore(blockClone, block.parentNode.firstChild)
    this.clickEvents(blockClone)
  }
  delete(e){
    e.preventDefault()
    const block = e.currentTarget.parentNode.parentNode
    block.parentNode.removeChild(block)
  }
  edit(e){
    e.preventDefault()
    const editClass = 'editing'
    const editArea = 'edit-area'
    const block = e.currentTarget.parentNode.parentNode
    const blockChildren = block.children
    if (block.classList){
      block.classList.add(editClass)
    } else {
      block.className += ' ' + editClass
    }
    for (let c = 0;c < blockChildren.length;c++) {
      const ce = blockChildren[c]
      // const eae = false
      const defineType = (el) => {
        if (typeof el.dataset != 'undefined') {
          if (el.dataset.type === 'textEdit') {
            this.editText(el)
          } else if (el.dataset.type === 'imageEdit'){
            this.editImage(el) 
          } else if (el.dataset.type === 'dividerEdit'){
            this.editDivider(el)
          }
        }       
      }
      if (ce.classList){
        defineType(ce.classList.contains(editArea))
        if(ce.classList.contains(editArea)){
          defineType(ce)
        }
      } else {
        if(new RegExp('(^| )' + editArea + '( |$)', 'gi').test(ce.editArea)){
          defineType(ce)
        }
      }
    }
  }
  editDivider(el){
    const editDivider = new EditDivider(el)
  }
  editImage(el){
    const editImage = new EditImage(el)
  }
  editText(el){
    const editText = new EditText(el)
  }
  clickEvents(el, constructor){
    const editLink = el.querySelectorAll('.edit')
    const copyLink = el.querySelectorAll('.copy')
    const deleteLink = el.querySelectorAll('.delete')
    if(copyLink.length > 0){
      copyLink[0].addEventListener('click', this.copy.bind(constructor))
    }
    if(deleteLink.length > 0){
      deleteLink[0].addEventListener('click', this.delete)
    }
    if(editLink.length > 0){
      editLink[0].addEventListener('click', this.edit.bind(constructor))
    }
  }
}
