<template>
    <v-layout>
        <v-flex xs6>

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
  export default {
    name: 'OurMission',

    data() {
      return {
        missionData: {
          title: 'Our Mission',
          subTitle: 'Sub title',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
          link: '/mission_test'
        },
      }
    }
  }
</script>

<style scoped>

</style>
