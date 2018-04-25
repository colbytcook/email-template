module.exports = ($el) => {
  require.ensure([], (require) => {
    const Module = require('./imageEdit.main')
    new Module($el)
  })
}
