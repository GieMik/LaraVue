import VueRouter from 'vue-router';
import Vue from 'vue';

import Login from './components/authentication/Login.vue';
import Register from './components/authentication/Register.vue';
import Feed from './components/Feed.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/login',
            component: Login,
            meta: {
                forVisitors: true
            }
        },
        {
            path: '/register',
            component: Register,
            meta: {
                forVisitors: true
            }
        },
        {
            path: '/feed',
            component: Feed,
            meta: {
                forAuth: true
            }
        }
    ],
    linkActiveClass: 'active'
});

export default router;