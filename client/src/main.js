import Vue from 'vue'
import App from './App.vue'
import router from './routes.js';
import VueResource from 'vue-resource';
import Auth from './packages/auth/auth.js';

Vue.use(Auth);
Vue.use(VueResource);

new Vue({
    el: '#app',
    render: h => h(App),
    router: router
});

router.beforeEach(
    (to, from, next) => {
         if (to.matched.some(record => record.meta.forVisitors)) {
              if (Vue.auth.isAuthenticated()) {
                  next({
                      path: '/feed'
                  })
              } else {
                  next();
              }
         } else if (to.matched.some(record => record.meta.forAuth)) {
             if ( !Vue.auth.isAuthenticated() ) {
                 next({
                    path: '/login'
                 })
             } else {
                  next();
             }
         } else {
             next();
         }
    }
);