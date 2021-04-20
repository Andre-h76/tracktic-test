import Vue from 'vue'
import App from './App.vue'
import SitesList from './components/SitesList.vue'
import SiteDetails from './components/SiteDetails.vue'
import VueRouter from 'vue-router';
import store from './store.js';

Vue.use(VueRouter);

const routes = [
  {
    name: 'sitesList',
    path: '/:page?',
    component: SitesList
  },
  {
    name: 'siteDetails',
    path: '/site/:id',
    component: SiteDetails,
    props: true
  }
];

const router = new VueRouter({ routes });

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
