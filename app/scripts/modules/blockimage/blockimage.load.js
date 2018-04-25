module.exports = ($el) => {
  require.ensure([], (require) => {
    const Module = require('./blockimage.main')
    new Module($el)
  })
}
