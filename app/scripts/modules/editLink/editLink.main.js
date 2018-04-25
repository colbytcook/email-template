module.exports = class EditLink {
  constructor(el){
    this.el = el
    this.el.addEventListener('click', (e) => {
      e.preventDefault()
      const editClass = 'editing'
      const block = e.currentTarget.parentNode.parentNode
      block
      if (block.classList){
        block.classList.add(editClass)
      } else {
        block.className += ' ' + editClass
      }
    })
  }
}
