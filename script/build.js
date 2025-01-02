const rollup = require('rollup')
const commonjs = require('@rollup/plugin-commonjs')
const node = require('@rollup/plugin-node-resolve')
const babel = require('@rollup/plugin-babel')
const path = require('node:path')
const packageJson = require('../package.json')

const { version, author } = packageJson

const resolve = p => path.resolve(__dirname, '../', p)
const entry = resolve('src/index.js')
const pkgName = packageJson.name.includes('/') ? packageJson.name.split('/')[1] : packageJson.name

function transformCamel(str) {
  const re = /-(\w)/g
  return str.replace(re, function($0, $1) {
    return $1.toUpperCase()
  })
}

const moduleName = transformCamel(pkgName)

const banner = 
  '/*!\n' +
  ` * Version: ${version}\n` +
  ` * Author: ${author}\n` +
  ' * Released under the MIT License.\n' +
  ' */'

const builds = {
  esm: {
    input: entry,
    plugins: [
      node(),
      commonjs(),
    ],
    output: {
      file: resolve(`lib/${pkgName}.esm.js`),
      format: 'esm',
      banner,
    },
  },
  umd: {
    input: entry,
    plugins: [
      node(),
      commonjs(),
    ],
    output: {
      file: resolve(`lib/${pkgName}.umd.js`),
      format: 'umd',
      name: moduleName,
      banner,
    },
  },
  cjs: {
    input: entry,
    plugins: [
      node(),
      commonjs(),
    ],
    output: {
      file: resolve(`lib/${pkgName}.cjs.js`),
      format: 'cjs',
      banner,
    },
  },
}

async function build() {
  for (const config of Object.values(builds)) {
    const inputOptions = config
    if (config.transpile) {
      inputOptions.plugins.push(babel({
        exclude: [ 'node_modules/**' ],
      }))
    }

    const outputOptions = config.output
    const bundle = await rollup.rollup(inputOptions)
    await bundle.write(outputOptions)
  }
  console.log('build success')
}

build()
