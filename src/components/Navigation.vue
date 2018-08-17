<template>
    <div class='nav-bar'>
        <div class='logo'>
            <router-link tag='a' to='/'>
                Logo
            </router-link>
        </div>

        <nav>
            <span v-if='!loggedIn' >Sing In</span>
            <span v-if='!loggedIn' @click='triggerModal(true)'>Sing Up</span>
            <router-link v-if='loggedIn' tag='a' to='/logout'>Logout</router-link>
        </nav>
    </div>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    name: 'Navigation',

    computed: {
      loggedIn () {
        return this.$store.getters.loggedIn;
      }
    },

    methods: {
      ...mapActions([
        'triggerModal'
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

    nav a,
    nav span {
        text-decoration: none;
        font-size: 18px;
        margin: 0 15px;
        color: #000;
        font-weight: bold;

        &.is-active {
            color: red;
        }
    }
</style>
