import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home'
import Portfolio from '@/components/portfolio/Portfolio'
import Stocks from '@/components/stocks/Stocks'
import Login from '@/components/Login'
import SignUp from '@/components/SignUp'
import firebase from 'firebase'

Vue.use(VueRouter);

let router = new VueRouter({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/sign-up',
            name: 'SignUp',
            component: SignUp
        },
        {
            path: '/portfolio',
            name: 'Portfolio',
            component: Portfolio,
            meta: {
                requiredAuth: true
            }
        },
        {
            path: '/stocks',
            name: 'Stocks',
            component: Stocks,
            meta: {
                requiredAuth: true
            }
        },

    ],
    mode: 'history'
});

router.beforeEach((to, from, next) => {
    let currentUser = firebase.auth().currentUser;
    let requiresAuth = to.matched.some(record => record.meta.requiredAuth);

    if (requiresAuth && !currentUser) {
        next({
            path : '/login',
            query: { redirect: to.fullPath }
        })
    }
    else if (!requiresAuth && currentUser) {
        next({
            path : '/'
        })
    } else {
        next();
    }
});
export default router;
