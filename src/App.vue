<template>
  <div>
    <navigation/>
    <router-view></router-view>
  </div>
</template>

<script>
import Registration from './containers/Registration'
import Navigation from  './components/Navigation'

export default {
  name: 'app',
  components: {
    Registration,
    Navigation
  }
}
</script>
