<template>
    <div>
        <Houses></Houses>
    </div>

</template>

<script>

  import Houses from '../components/properties/Houses'

  export default {
    name: 'ItemOverview',
    components: { Houses },

    data() {
      return {
        active: null,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      }
    },
  }

</script>

<style scoped>

</style>
