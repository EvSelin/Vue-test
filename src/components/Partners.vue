<template>
    <div>
        <div>
            <h2>{{ partnerTitle }}</h2>
        </div>
        <div v-for='el in dataPartners' :key='el.partner'>
            <img :src='el.src' alt="">
            <span>{{el.partner}}</span>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'Partners',

    data() {
      return {
        partnerTitle: 'Our Partner',
        dataPartners: [
          {
            src: '',
            partner: 'Banque le leman'
          },
          {
            src: '',
            partner: 'Raizers'
          },
          {
            src: '',
            partner: 'Immabilliere Romande'
          },
        ]
      }
    }
  }
</script>

<style scoped>

</style>
