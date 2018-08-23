<template>
    <v-layout>
        <v-flex xs6>
            <img :src='src' alt="">
        </v-flex>
        <v-flex xs6>
            <h2>{{ missionData.title }}</h2>
            <span>{{ missionData.subTitle }}</span>
            <p>{{ missionData.description }}</p>
            <router-link :to='missionData.link'>Learn more</router-link>
        </v-flex>
    </v-layout>
</template>

<script>
  import axios from  'axios'
  export default {
    name: 'OurMission',

    data() {
      return {
        src: '',
        missionData: {
          title: 'Our Mission',
          subTitle: 'Sub title',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
          link: '/mission_test'
        },
      }
    },

    created() {
      axios('https://jsonplaceholder.typicode.com/photos/1')
        .then(response => {
          this.src = response.data.url
        })
        .catch(error => {
          console.error(error)
        })
    }
  }
</script>

<style scoped>

</style>
