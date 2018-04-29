import {utilities} from '../utilities/utilities.js'

module.exports = class Save {
  constructor(el){
    this.writeData(el)
    if(utilities.storageAvailable){
      utilities.saveToStorage()
    }
  }
  saveDivider(el){
    utilities.setStorage()
  }
  saveImage(el){
    utilities.setStorage()
  }
  saveText(el){
    if(el.querySelector('.ck-content') !== null){
      const textContent = el.querySelector('.ck-content').innerHTML
      const ckCheck = new RegExp(/'cke-filler'/g)
      if(!textContent.match(ckCheck)){
        const editingClass = 'editing'
        const block = el.parentNode
        el.previousElementSibling.innerHTML = textContent
        if (block.classList){
          block.classList.remove(editingClass);
        } else {
          block.editingClass = block.editingClass.replace(new RegExp('(^|\\b)' + editingClass.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        }
        utilities.setStorage()
      }
    }
  }
  writeData(el){
    let editArea
    if(typeof el.srcElement === 'undefined'){
      editArea = el.children[1]
    } else {
      editArea = el.srcElement.parentNode.previousElementSibling
    }
    if (typeof editArea.dataset != 'undefined') {
      if (editArea.dataset.type === 'textEdit'){
        console.log('edit text')
        this.saveText(editArea)
      } else if (editArea.dataset.type === 'imageEdit'){
        console.log('edit image')
        this.saveImage(editArea)
      } else if (editArea.dataset.type === 'dividerEdit'){
        console.log('edit divider') 
        this.saveDivider(editArea)
      }
    }
  }
}
