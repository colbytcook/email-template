const EditDivider = require('../editDivider/editDivider.js')
const EditImage = require('../editImage/editImage.js')
const EditText = require('../editText/editText.js')
const Save = require('../save/save.js')
let editDivider, editImage, editText, saveEmail, save

module.exports = class Block {
  constructor(el){
    this.el = el
    this.clickEvents(this.el, this)
  }
  clickEvents(el, constructor){
    const editLink = el.querySelectorAll('.edit')
    const copyLink = el.querySelectorAll('.copy')
    const deleteLink = el.querySelectorAll('.delete')
    const saveLink = el.querySelectorAll('.save')
    if(copyLink.length > 0){
      copyLink[0].addEventListener('click', this.copy.bind(constructor))
    }
    if(deleteLink.length > 0){
      deleteLink[0].addEventListener('click', this.delete)
    }
    if(editLink.length > 0){
      editLink[0].addEventListener('click', this.edit.bind(constructor))
    }
    if(saveLink.length > 0){
      saveLink[0].addEventListener('click', this.save.bind(constructor))
    }
  }
  copy(e){
    e.preventDefault()
    const block = e.currentTarget.parentNode.parentNode
    const blockClone = block.cloneNode(true)
    block.parentNode.insertBefore(blockClone, block.parentNode.firstChild)
    this.clickEvents(blockClone)
    save = new Save(e)
  }
  delete(e){
    e.preventDefault()
    const block = e.currentTarget.parentNode.parentNode
    block.parentNode.removeChild(block)
    save = new Save(e)
  }
  edit(e){
    e.preventDefault()
    const editClass = 'editing'
    const editArea = 'edit-area'
    const activeClass = "active"
    const block = e.currentTarget.parentNode.parentNode
    const blockChildren = block.children
    if (e.currentTarget.classList){
      if(e.currentTarget.classList.contains(activeClass)){
        e.currentTarget.classList.remove(activeClass)
      } else {
        e.currentTarget.classList.add(activeClass)
      }
    } else {
      if(new RegExp('(^| )' + activeClass + '( |$)', 'gi').test(e.currentTarget.activeClass)){
        e.currentTarget.activeClass = e.currentTarget.activeClass.replace(new RegExp('(^|\\b)' + activeClass.split(' ').join('|') + '(\\b|$)', 'gi'), ' ')
      } else {
        block.className += ' ' + activeClass
      }
    }
    if (block.classList){
      block.classList.add(editClass)
    } else {
      block.className += ' ' + editClass
    }
    for (let c = 0;c < blockChildren.length;c++) {
      const ce = blockChildren[c]
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
    editDivider = new EditDivider(el)
  }
  editImage(el){
    editImage = new EditImage(el)
  }
  editText(el){
    editText = new EditText(el)
  }
  save(e){
    e.preventDefault()
    saveEmail = new Save(e.currentTarget.parentNode.parentNode)
  }
}
