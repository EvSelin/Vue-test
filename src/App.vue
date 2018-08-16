<template>
  <div>
    <button @click="$store.commit('triggerModal')">Show Modal</button>

    <modal v-show='this.$store.getters.showModal'>
      <div slot='body'>
        <registration></registration>
      </div>
    </modal>

    <navigation/>
    <router-view></router-view>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex'
  import Registration  from './containers/Registration'
  import Navigation    from './components/Navigation'
  import Modal         from './components/ModalWindow'
  import Home          from './containers/Home'
  import Authorization from './containers/Authorization'
  import About         from './containers/About'
  import Blog          from './containers/Blog'
  import HowItWorks    from './containers/HowItWorks'
  import Properties    from './containers/Properties'
  import FAQ           from './containers/FAQ'
  import TsCs          from './containers/TsCs'
  import router        from './router/routes'
  import NotFound      from './containers/NotFound'

  export default {
    name: 'app',
    components: {
      Registration,
      Navigation,
      Modal
    },

    data() {
      return {
        // showModal: false
      }
    },

    created () {
      this.fetchRoutes()
    },

    methods: {
      ...mapMutations(['triggerModal']),

      fetchRoutes(){
        setTimeout(function () {
          router.addRoutes([
            { path: '/',              component: Home },
            { path: '/registration',  component: Registration },
            { path: '/authorization', component: Authorization },
            { path: '/about',         component: About },
            { path: '/blog',          component: Blog },
            { path: '/how_it_works',  component: HowItWorks },
            { path: '/properties',    component: Properties },
            { path: '/FAQ',           component: FAQ },
            { path: '/terms',         component: TsCs },
            { path: '/NotFound',      component: NotFound },
          ])
        }, 500);
      }
    }
  }

</script>
