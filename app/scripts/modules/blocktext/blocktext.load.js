module.exports = ($el) => {
  require.ensure([], (require) => {
    const Module = require('./blockText.main')
    new Module($el)
  })
}
