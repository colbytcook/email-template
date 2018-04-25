module.exports = class CopyLink {
  constructor(el){
    this.el = el
    const copyLink = this.el.querySelectorAll('.copy')
    if(copyLink.length > 0){
      copyLink[0].addEventListener('click', (e) => {
        e.preventDefault()
        const block = e.currentTarget.parentNode.parentNode
        const blockClone = block.cloneNode(true)
        block.parentNode.insertBefore(blockClone, block.parentNode.firstChild);
      })
    }
  }
}
