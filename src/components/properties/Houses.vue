<template>
    <v-container>
        <v-layout row wrap>
            <v-flex xs9>
                <v-carousel>
                    <v-carousel-item
                            v-for='( item, i ) in items'
                            :key='i'
                            :src='item.src'
                    ></v-carousel-item>
                </v-carousel>
            </v-flex>
            <v-flex xs3></v-flex>
            <v-layout xs12>
                <v-flex xs6>
                    <v-progress-linear color='blue'
                                       height='15'
                                       v-model='valueDeterminate'>
                    </v-progress-linear>
                </v-flex>
                <v-flex xs6>
                    2
                </v-flex>
            </v-layout>
        </v-layout>
    </v-container>
</template>

<script>
  export default {
    name: 'Houses',

    data() {
      return {
        valueDeterminate: 82,
        items: [
          { src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg' },
          { src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg' },
          { src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg' },
          { src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg '}
        ]
      }
    }
  }
</script>

<style lang='scss'>
</style>
