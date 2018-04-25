module.exports = ($el) => {
  require.ensure([], (require) => {
    const Module = require('./textEdit.main')
    new Module($el)
  })
}
