module.exports = ($el) => {
  require.ensure([], (require) => {
    const Module = require('./blockdivider.main')
    new Module($el)
  })
}
