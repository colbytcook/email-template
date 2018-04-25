module.exports = class CopyLink {
  constructor(el){
    this.el = el
    this.el.addEventListener('click', (e) => {
      e.preventDefault()
      const block = e.currentTarget.parentNode.parentNode
      const blockClone = block.cloneNode(true)
      block.parentNode.insertBefore(blockClone, block.parentNode.firstChild);
    })
  }
}
