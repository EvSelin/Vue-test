import Vue from 'vue';
import VueRouter from 'vue-router'

Vue.use(VueRouter);

// import Home           from '../containers/Home'
// import Registration   from '../containers/Registration'
// import Authorization  from '../containers/Authorization'
// import About          from '../containers/About'
// import Blog           from '../containers/Blog'
// import HowItWorks     from '../containers/HowItWorks'
// import Properties     from '../containers/Properties'
// import FAQ            from '../containers/FAQ'
// import TsCs           from '../containers/TsCs'
// import NotFound       from '../containers/NotFound'

// const routes = [
//   { path: '/',               component: Home },
//   { path: '/registration',   component: Registration },
//   { path: '/authorization',  component: Authorization },
//   { path: '/about',          component: About },
//   { path: '/blog',           component: Blog },
//   { path: '/how_it_works',   component: HowItWorks },
//   { path: '/properties',     component: Properties },
//   { path: '/FAQ',            component: FAQ },
//   { path: '/terms',          component: TsCs },
// ];

const router = new VueRouter({
  // routes,
  mode: 'history',
  linkActiveClass: 'is-active'
});

export default router
