module.exports = ($el) => {
  require.ensure([], (require) => {
    const Module = require('./drag.main')
    new Module($el)
  })
}
