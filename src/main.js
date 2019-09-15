import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';

import screen1 from './components/Screen1.vue';
import screen2 from './components/Screen2.vue';
import screen3 from './components/Screen3.vue';

Vue.use(VueRouter);



var router = new VueRouter({
  routes: [{
      path: '/Screen1',
      name: 'screen1',
      component: screen1
    },
    {
      path: '/Screen2',
      name: 'screen2',
      component: screen2
    },
    {
      path: '/Screen3',
      name: 'screen3',
      component: screen3
    },
  ]
});

window.addEventListener('popstate',()=>{
  location.reload();
});




Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router: router,
  data: {
    prev: ''
  }

}).$mount('#app');