<template>
    <div>
        <label>
            Person
        <input type='radio' v-bind:value='true' v-model='triggerTab'>
        </label>
        <label>
            Company
            <input type='radio' v-bind:value='false' v-model='triggerTab'>
        </label>
        <br>
        <div class='tabs-container'>
            <transition name='component-fade'>
                <person v-show='triggerTab'></person>
            </transition>

            <transition name='component-fade'>
                <company v-show='!triggerTab'></company>
            </transition>
        </div>
    </div>
</template>

<script>
  import { mapActions } from 'vuex'
  import person from  '../components/registration/Person'
  import company from  '../components/registration/Company'


  export default {
    name: 'Registration',
    components: {
      person,
      company
    },

    data () {
      return {
        triggerTab: true,
      }
    },

    methods: {
      ...mapActions(['registration']),

      sendData(data) {
        this.registration(data)
      },
    }
  }
</script>

<style lang='scss'>

    .component-fade-enter-active,
    .component-fade-leave-active {
        transition: opacity 0.3s ease
    }

    .component-fade-enter,
    .component-fade-leave-to {
        opacity: 0
    }

    .tabs-container {
        position: relative;

        > div {
            position: absolute
        }
    }

    input.field_with_error {
        border: 2px solid #f79483
    }
</style>
