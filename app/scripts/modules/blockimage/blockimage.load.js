module.exports = ($el) => {
  require.ensure([], (require) => {
    const Module = require('./blockImage.main')
    new Module($el)
  })
}
