module.exports = ($el) => {
  require.ensure([], (require) => {
    const Module = require('./editLink.main')
    new Module($el)
  })
}
