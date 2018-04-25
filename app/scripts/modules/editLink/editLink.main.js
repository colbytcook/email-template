module.exports = class EditLink {
  constructor(el){
    this.el = el
    const editLink = this.el.querySelectorAll('.edit')
    if(editLink.length > 0){
      editLink[0].addEventListener('click', (e) => {
        e.preventDefault()
        const editClass = 'editing'
        const block = e.currentTarget.parentNode.parentNode
        if (block.classList){
          block.classList.add(editClass)
        } else {
          block.className += ' ' + editClass
        }
      })
    }
  }
}
