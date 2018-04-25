module.exports = class DeleteLink {
  constructor(el){
    this.el = el
    this.el.addEventListener('click', (e) => {
      e.preventDefault()
      const block = e.currentTarget.parentNode.parentNode
      block.parentNode.removeChild(block)
    })
  }
}
