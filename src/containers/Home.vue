<template>
    <div>
        <SquareGrid :data='howWorkData'></SquareGrid>
        <OurMission></OurMission>
        <SquareGrid :data='withWOAw'></SquareGrid>
        <Partners></Partners>
    </div>
</template>

<script>

  import SquareGrid from '../components/SquareGrid'
  import OurMission from '../components/OurMission'
  import Partners from '../components/Partners'

  export default {
    name: 'Home',
    components: {
      SquareGrid,
      OurMission,
      Partners
    },

    data() {
      return {
        howWorkData: {
          headline: 'How it Works',
          content: [
            {
              src: 'img',
              title: 'title',
              description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
              link: '/test',
            },
            {
              src: 'img',
              title: 'title1',
              description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
              link: '/test',
            },
            {
              src: 'img',
              title: 'title2',
              description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
              link: '/test',
            },
            {
              src: 'img',
              title: 'title3',
              description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
              link: '/test',
            },
          ]
        },
        withWOAw: {
          headline: 'Why crowdinvesting with WOAw!',
          content: [
            {
              src: 'img',
              title: 'title',
              description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
              link: '/test',
            },
            {
              src: 'img',
              title: 'title1',
              description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
              link: '/test',
            },
            {
              src: 'img',
              title: 'title2',
              description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
              link: '/test',
            },
            {
              src: 'img',
              title: 'title3',
              description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
              link: '/test',
            },
          ]
        }
      }
    }
  }

</script>

<style scoped>

</style>
