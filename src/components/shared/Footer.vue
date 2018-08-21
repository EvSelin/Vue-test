<template>
    <footer>
        <v-layout row wrap>
            <v-flex xs6>
                <router-link tag='a' to='/'>WOAw</router-link>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus amet aperiam aut beatae corporis
                    cumque cupiditate deleniti facere inventore labore, modi quis quo ratione recusandae saepe
                    temporibus totam voluptates voluptatibus.
                </p>

                <span>2018 Copywriting - all right Reserved</span>
            </v-flex>
            <v-flex xs3>
                <div class='list'>
                    <ul>
                        <li>Navigation</li>
                        <li><router-link to='/home'>Home</router-link></li>
                        <li><router-link to='/properties'>Properties</router-link></li>
                        <li> <router-link to='/how_it_works'>How it works</router-link></li>
                        <li> <router-link to='/about'>About Us</router-link></li>
                        <li> <router-link to='/blog'>Blog</router-link></li>
                    </ul>
                </div>
            </v-flex>
            <v-flex xs3>
                <ul>
                    <li>Contact Us</li>
                    <li>95 South Park Ave</li>
                    <li>+456 875 369 208</li>
                    <li>support@woaw.com</li>
                </ul>
            </v-flex>
        </v-layout>
    </footer>
</template>

<script>
  export default {
    name: 'Footer',
  }
</script>

<style lang='scss' scoped>
    footer {
        background-color: #f4f9fd;
    }

    .list,
    .list > * {
        display: inline-flex;
        flex-direction: column;
    }
</style>
