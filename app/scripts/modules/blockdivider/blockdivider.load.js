module.exports = ($el) => {
  require.ensure([], (require) => {
    const Module = require('./blockDivider.main')
    new Module($el)
  })
}
