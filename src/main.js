import Vue from 'vue'
import App from '@/App.vue'
import router from './router/index'

import '@/config/rem'

// import VueLazyload from 'vue-lazyload'
import { Lazyload } from 'mint-ui'
import 'mint-ui/lib/style.css'
import Fastclick from 'fastclick'

// 导入axios封装 Vue.$api调用
// import api from './http/index'
// Vue.use(api)

Vue.config.productionTip = true

Vue.use(Lazyload, {
    // preLoad: 1.3,
    // error: require('./common/img/error.png'), 
    // loading: require('./common/img/pic-loader.png'),
    // attempt: 1
})

// Vue.use(VueLazyload, {
//   // preLoad: 1.3,
//   error: require('./common/img/error.png'),
//   loading: require('./common/img/pic-loader.png'),
//   // attempt: 1
// })

if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function () {
    Fastclick.attach(document.body)
  }, false)
}

const app = new Vue({
  router,
  components: {
    App,
  },
  render: h => h(App),
});

window.mountApp = () => {
  app.$mount('#app');
};

if (process.env.NODE_ENV === 'production') {
  if (window.STYLE_READY) {
    window.mountApp();
  }
} else {
  window.mountApp();
}
