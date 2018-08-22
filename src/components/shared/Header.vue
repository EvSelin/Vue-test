<template>
    <section>
        <header>
            <div v-if='loggedIn' class='top-nav'>
                <router-link tag='a' to='/'>My Portfolio</router-link>
                Welcome-{{ user }}
            </div>
            <v-toolbar>
                <!--<v-toolbar-side-icon></v-toolbar-side-icon>-->
                <v-toolbar-title>
                    <router-link tag='a' to='/'>WOAw</router-link>
                </v-toolbar-title>

                <v-spacer></v-spacer>

                <Navigation></Navigation>
            </v-toolbar>

            <Modal v-show='modalState'>
                <div slot='body'><registration/></div>
            </Modal>

            <!--<Modal v-show='modalState'>-->
                <!--<div slot='body'><authorization/></div>-->
            <!--</Modal>-->
            
        </header>

        <div v-if='!loggedIn'>
            <h1>Need to diversity your savings</h1>
            <p>At vero eos et accusamus et iusto odio dignissimos</p>
            <v-btn color='blue' @click='triggerModal(true)'>Get Started</v-btn>
        </div>
    </section>
</template>

<script>
  import Modal          from '../ModalWindow'
  import Navigation     from '../Navigation'
  import Registration   from '../../containers/Registration'
  import Authorization   from '../../containers/Authorization'
  import { mapActions, mapState, mapGetters } from 'vuex'

  export default {
    name: 'Header',
    components: {
      Navigation,
      Modal,
      Registration,
      Authorization
    },

    data() {
      return {
        user: 'User'
      }
    },

    computed: {
      ...mapState({
        modalState: state => state.modals.visibility
      }),

      ...mapGetters([
        'loggedIn'
      ]),
    },

    methods: {
      ...mapActions([
        'triggerModal'
      ]),
    }
  }

</script>

<style lang='scss' scoped>
    header {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 999;

        .top-nav {
            padding: 0 10px;
            display: flex;
            justify-content: space-between;
        }
    }

    section {
        display: flex;
        align-items: center;
        margin-top: 65px;
        height: 50vh;
    }
</style>
