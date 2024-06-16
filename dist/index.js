
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./ds-alurabooks-base-dm.cjs.production.min.js')
} else {
  module.exports = require('./ds-alurabooks-base-dm.cjs.development.js')
}
