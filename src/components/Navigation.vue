<template>
    <v-toolbar-items class='hidden-sm-and-down'>
        <router-link tag='button' class="v-btn v-btn--flat" to='/properties'>Properties</router-link>
        <router-link tag='button' class="v-btn v-btn--flat" to='/how_it_works'>How it works</router-link>
        <router-link tag='button' class="v-btn v-btn--flat" to='/about'>About Us</router-link>
        <router-link tag='button' class="v-btn v-btn--flat" to='/blog'>Blog</router-link>
        <v-btn flat v-if='!loggedIn' @click='showModal("Authorization")'>Sing In</v-btn>
        <v-btn flat v-if='loggedIn'>Logout</v-btn>
    </v-toolbar-items>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'

  export default {
    name: 'Navigation',

    computed: {
      ...mapGetters([
        'loggedIn'
      ]),
    },

    methods: {
      ...mapActions([
        'showModal'
      ]),
    }
  }

</script>

<style lang='scss' scoped>

    .nav-bar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 15px 0;

        .logo a {
            font-size: 20px;
            font-weight: bold;
            color: #000;
            text-decoration: none;
        }
    }

    .is-active {
        color: red;
    }

</style>
