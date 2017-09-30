// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'
import VueResource from 'vue-resource'
import firebase from 'firebase'

Vue.use(VueResource);
Vue.http.options.root = 'https://vue-stocks-3e87e.firebaseio.com/';
Vue.config.productionTip = false
Vue.filter('currency', (value) => {
    return '$' + value.toLocaleString();
});
let app;
var config = {
    apiKey: "AIzaSyAoxqJ-vQWfl3QJdPY8dwMDv41MXjKpx74",
    authDomain: "vue-stocks-3e87e.firebaseapp.com",
    databaseURL: "https://vue-stocks-3e87e.firebaseio.com",
    projectId: "vue-stocks-3e87e",
    storageBucket: "vue-stocks-3e87e.appspot.com",
    messagingSenderId: "1005054236818"
};
firebase.initializeApp(config);
firebase.auth().onAuthStateChanged(function (user) {
    if (!app) {
        app = new Vue({
            el: '#app',
            router,
            store,
            template: '<App/>',
            components: {App}
        });
    }
});
/* eslint-disable no-new */

