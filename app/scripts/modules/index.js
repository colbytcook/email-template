module.exports = {
  init: function() {
    const dataModules = document.querySelectorAll('[data-module]')
    for (const dataModule of dataModules) {
      const name = dataModule.dataset.module
      try {
        const module = this.modules[name](dataModule)
      } catch (e) {
        console.warn(`Data module ${name} not defined`)
      }
    }
  },
  modules: {
    blockdivider: require('./blockdivider/blockdivider.load'),
    blockimage: require('./blockimage/blockimage.load'),
    blocktext: require('./blocktext/blocktext.load'),
    copyLink: require('./copyLink/copyLink.load'),
    deleteLink: require('./deleteLink/deleteLink.load'),
    editLink: require('./editLink/editLink.load'),
    drag: require('./drag/drag.load')
  }
}
