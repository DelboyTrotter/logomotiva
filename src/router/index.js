import Vue from 'vue';
import Router from 'vue-router';
import A from '@/layouts/A';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'A',
      component: A,
    },
  ],
});
