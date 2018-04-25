module.exports = ($el) => {
  require.ensure([], (require) => {
    const Module = require('./copyLink.main')
    new Module($el)
  })
}
