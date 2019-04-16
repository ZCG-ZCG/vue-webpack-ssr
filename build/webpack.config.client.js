
const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const merge = require('webpack-merge')
const ExtractPlugin = require('extract-text-webpack-plugin')
const baseconfig = require('./webpack.config.base')

// eslint-disable-next-line eqeqeq
const isDev = process.env.NODE_ENV == 'development'

const defalutPlugins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: isDev ? "'development'" : "'production'"
    }
  }),
  new VueLoaderPlugin(),
  new HtmlWebpackPlugin({
    template: path.join(__dirname, './template.html')
  })
]

const devServer = {
  port: 8000,
  host: '0.0.0.0',
  overlay: {
    errors: true
  },
  // open: true
  historyApiFallback: {
    index: '/public/index.html'
  },
  hot: true
}

let config

if (isDev) {
  config = merge(baseconfig, {
    devtool: '#@cheap-module-eval-source-map',
    module: {
      rules: [
        {
          test: /\.styl/,
          use: [
            'vue-style-loader',
            {
              loader: 'css-loader'
              // options:{
              //   // modules: true,
              //   localIdentName: isDev ? "[path]-[name]-[hash:base64:5]" : "[hash:base64:5]",
              //   camelCase: true
              // }
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true
              }
            },
            'stylus-loader'
          ]
        }
      ]
    },
    devServer,
    plugins: defalutPlugins.concat([
      new webpack.HotModuleReplacementPlugin()
      // new webpack.NoEmitOnErrorsPlugin()
    ])
  })
} else {
  config = merge(baseconfig, {
    entry: {
      path: path.join(__dirname, '../client/index.js')
      // vendor: ['vue']
    },
    output: {
      filename: '[name].[chunkhash:8].js'
    },
    module: {
      rules: [
        {
          test: /\.styl/,
          use: ExtractPlugin.extract({
            fallback: 'vue-style-loader',
            use: [
              'css-loader',
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: true
                }
              },
              'stylus-loader'
            ]
          })
        }
      ]
    },
    plugins: defalutPlugins.concat([
      new ExtractPlugin('styles.[chunkhash:8].css')
    ]),
    optimization: {
      splitChunks: {
        cacheGroups: {
          commons: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendor',
            chunks: 'all'
          }
        }
      },
      runtimeChunk: true
    }
  })
}

module.exports = config
