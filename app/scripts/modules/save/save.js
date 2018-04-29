// import $ from 'jquery' 

module.exports = class Save {
  constructor(el){
    // this.el = el

    this.writeData(el)
    if(this.storageAvailable){
      this.saveToStorage()
    }
  }
  saveText(el){
    const textContent = el.querySelector('.ck-content').innerHTML
    // console.log('save edit');
    const ckCheck = /data-cke-filler/i
    if(!textContent.match(ckCheck)){
      const editingClass = 'editing'
      const block = el.parentNode
      // console.log(textContent);
      
      // console.log(el.previousElementSibling.innerHTML);
      console.log(block);
      
      el.previousElementSibling.innerHTML = textContent
      if (block.classList){
        block.classList.remove(editingClass);
      } else {
        block.editingClass = block.editingClass.replace(new RegExp('(^|\\b)' + editingClass.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
      }
      // console.log('default');
      // console.log(textContent);
      // console.log(typeof textContent);
      
      // console.log(el.previousElementSibling);
      
    }
    
  }
  saveToStorage(){
    if(!localStorage.getItem('emailData')) {
      // this.populateStorage();
    } else {
      this.setStorage();
    }
  }
  setStorage(){


    // var currentColor = localStorage.getItem('bgcolor');
    // var currentFont = localStorage.getItem('font');
    // var currentImage = localStorage.getItem('image');

    // document.getElementById('bgcolor').value = currentColor;
    // document.getElementById('font').value = currentFont;
    // document.getElementById('image').value = currentImage;

    // htmlElem.style.backgroundColor = '#' + currentColor;
    // pElem.style.fontFamily = currentFont;
    // imgElem.setAttribute('src', currentImage);


  }
  storageAvailable(type) {
    try {
        var storage = window[type], x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    } catch(e) {
      return e instanceof DOMException && e.code === 22
    }
  }
  writeData(el){
    const editArea = el.el.children[1]
    // console.log(editArea)
    if (typeof editArea.dataset != 'undefined') {
      if (editArea.dataset.type === 'textEdit'){
        this.saveText(editArea)
      } else if (editArea.dataset.type === 'imageEdit'){
        // this.editImage(el) 
      } else if (editArea.dataset.type === 'dividerEdit'){
        // this.editDivider(el)
      }
    }     
    // console.log(el.el.children[1])
    // el.parentNode
  }
}
