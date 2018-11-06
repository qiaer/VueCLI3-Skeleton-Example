const path = require('path');
const SkeletonWebpackPlugin = require('vue-skeleton-webpack-plugin');
const env = require('./config/env');

module.exports = {
  baseUrl: process.env.NODE_ENV === 'production' ? 'http://cdn.xxx.com/'+env.serverPath : '/',
  // baseUrl: './',
  outputDir: 'dist',
  lintOnSave: true,
  productionSourceMap: false,
  
  configureWebpack: {
    plugins: [
      new SkeletonWebpackPlugin({
        webpackConfig: {
          entry: {
            app: path.join(__dirname, './src/skeleton.js'),
          },
        },
        minimize: true,
        quiet: true,
        router: {
          mode: 'history',
          routes: [
              {
                  path: '/',
                  skeletonId: 'skeleton'
              },
              // {
              //     path: '/index',
              //     skeletonId: 'skeleton'
              // },
              // {
              //     path: '/page2',
              //     skeletonId: 'skeleton2'
              // }
          ]
        }
      }),
    ],
    // resolve: {
    //   alias: {
    //     'vue$': 'vue/dist/vue.esm.js'
    //   }
    // }
  },

  devServer: {
    host: '192.168.2.124',
    port: 8080,
    open: true,
  },

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        './src/common/style/common.less'
      ]
    }
  }
};
