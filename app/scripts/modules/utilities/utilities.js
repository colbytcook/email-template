const Block = require('../block/block.js')
const Drag = require('../drag/drag.main.js')
let block, contentArea, drag

const utilities = {
  populateStorage: () => {
    contentArea = document.getElementById('contentArea')
    contentArea.innerHTML = localStorage.emailTemplate
    contentArea.querySelectorAll('block')
    const blockLength = contentArea.querySelectorAll('.block')
    for (let bl = 0;bl < blockLength.length;bl++) {
      block = new Block(blockLength[bl])
    }
  },
  saveToStorage: () => {
    if(localStorage.getItem('emailTemplate')) {
      utilities.populateStorage()
    } else {
      utilities.setStorage()
    }
  },
  setStorage: () => {
    contentArea = document.getElementById('contentArea').innerHTML
    localStorage.setItem('emailTemplate', contentArea)
  },
  storageAvailable: (type) => {
    try {
        var storage = window[type], x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    } catch(e) {
      return e instanceof DOMException && e.code === 22
    }
  }
}

export {utilities}
