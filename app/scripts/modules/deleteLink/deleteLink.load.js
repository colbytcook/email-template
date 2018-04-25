module.exports = ($el) => {
  require.ensure([], (require) => {
    const Module = require('./deleteLink.main')
    new Module($el)
  })
}
