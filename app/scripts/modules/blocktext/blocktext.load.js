module.exports = ($el) => {
  require.ensure([], (require) => {
    const Module = require('./blocktext.main')
    new Module($el)
  })
}
