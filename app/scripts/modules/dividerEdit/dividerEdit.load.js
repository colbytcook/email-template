module.exports = ($el) => {
  require.ensure([], (require) => {
    const Module = require('./dividerEdit.main')
    new Module($el)
  })
}
