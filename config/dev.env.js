'use strict'

const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_URL: '"https://api.mercadolibre.com/"',
  SEARCH_API: '"sites/MLA/search?q="',
  ID_ITEM: '"items/"',
})
