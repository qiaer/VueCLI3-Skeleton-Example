// import Vue from 'vue'
// import Router from 'vue-router'
// import Index from '@/components/Index'
// import Home from '@/components/Home'

// Vue.use(Router)

// export default new Router({
//     // cacheView: true,
//     routerMode: 'history',
//     routes: [
//         {
//         path: '/',
//         redirect: '/index'
//         },
//         {
//         path: '/index',
//         name: 'Index',
//         component: Index
//         },
//         {
//         path: '/home',
//         name: 'Home',
//         component: Home
//         }
//     ],
//     scrollBehavior (to, from, savedPosition) {
//         if (savedPosition) {
//         return savedPosition;
//         } else {
//         if (from.meta.keepAlive) {
//             from.meta.savedPosition = document.body.scrollTop;
//         }
//         return {x: 0, y: to.meta.savedPosition || 0};
//         }
//     }
// })
