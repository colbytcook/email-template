const EditLink = require('../editLink/editLink.main.js');
const CopyLink = require('../copyLink/copyLink.main.js');
const DeleteLink = require('../deleteLink/deleteLink.main.js');

module.exports = (el) => {
  // this.el = el
  const editLink = new EditLink(el)
  const copyLink = new CopyLink(el)
  const deleteLink = new DeleteLink(el)
}
