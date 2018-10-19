const path = require('path');
const SkeletonWebpackPlugin = require('vue-skeleton-webpack-plugin');

module.exports = {
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
                  path: '/page1',
                  skeletonId: 'skeleton1'
              },
              {
                  path: '/page2',
                  skeletonId: 'skeleton2'
              }
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
    host: 'localhost',
    port: 8080,
    open: true,
  },

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        '/Users/huangyouqiang/Desktop/skeleton-vuecli3/src/common/style/common.less'
      ]
    }
  }
};
