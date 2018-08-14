import Vue from 'vue';
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import Home           from '../containers/Home'
import Registration   from '../containers/Registration'
import Authorization  from '../containers/Authorization'
import NotFound       from '../containers/404'

const routes = [
  { path: '/',               component: Home },
  { path: '/registration',   component: Registration },
  { path: '/authorization',  component: Authorization },
  { path: '/*',              component: NotFound },
];


export default new VueRouter({
  routes,
  mode: 'history',
  linkActiveClass: 'is-active'
});
