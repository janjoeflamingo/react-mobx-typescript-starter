const presets = require('./configs/babel.config/presets')
const plugins = require('./configs/babel.config/plugins')
const overrides = require('./configs/babel.config/overrides')

module.exports = function (api) {
  const web = api.caller(caller => Boolean(caller && caller.target === 'web'))
  const babel = api.caller(caller => Boolean(caller && caller.name === 'babel-loader'))

  const test = api.env('test')
  const production = api.env('production')
  const development = api.env('development')

  const loose = true
  const legacy = true
  const comments = true // webpackChunkName doesn't work if the value is false
  const targets = !web ? { node: 'current' } : undefined
  const modules = babel ? false : 'commonjs'
  const useBuiltIns = web ? 'usage' : undefined

  return {
    comments,
    presets: presets({ development, production, test, loose, useBuiltIns, modules, targets }),
    plugins: plugins({ development, production, test, loose, legacy }),
    overrides: overrides({ development, production, test }),
    ignore: [],
  }
}
