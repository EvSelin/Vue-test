<template>
  <div>
    <Header></Header>
    <main>
      <router-view/>
    </main>
    <Footer></Footer>
  </div>
</template>

<script>
  import '../src/assets/style/aplication.scss'
  import { mapActions } from 'vuex'
  import Header         from './components/shared/Header'
  import Footer         from './components/shared/Footer'
  import Registration   from './containers/Registration'
  import Home           from './containers/Home'
  import Authorization  from './containers/Authorization'
  import About          from './containers/About'
  import Blog           from './containers/Blog'
  import HowItWorks     from './containers/HowItWorks'
  import Properties     from './containers/Properties'
  import PropertiesItem from './containers/PropertieItem'
  import FAQ            from './containers/FAQ'
  import TsCs           from './containers/TsCs'
  import router         from './router/routes'
  import NotFound       from './containers/NotFound'

  export default {
    name: 'app',
    components: {
      Header,
      Footer,
      Authorization,
      Registration,
    },

    data() {
      return {
      }
    },

    created () {
      this.fetchRoutes()
    },

    methods: {
      ...mapActions([
        'triggerModal'
      ]),

      fetchRoutes() {
        setTimeout(function () {
          router.addRoutes([
            { path: '/',                component: Home },
            { path: '/registration',    component: Registration },
            { path: '/authorization',   component: Authorization },
            { path: '/about',           component: About },
            { path: '/blog',            component: Blog },
            { path: '/how_it_works',    component: HowItWorks },
            { path: '/properties',      component: Properties },
            { path: '/properties_item', component: PropertiesItem },
            { path: '/FAQ',             component: FAQ },
            { path: '/terms',           component: TsCs },
            { path: '/NotFound',        component: NotFound },
          ])
        }, 500);
      }
    }
  }

</script>
