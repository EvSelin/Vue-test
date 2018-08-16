<template>
    <div>
        <button v-for='tab in tabs'
                v-bind:key='tab'
                v-bind:class="['tab-button', { active: currentTab === tab }]"
                v-on:click='currentTab = tab'>
            {{ tab }}
        </button>

        <br>

        <transition name='component-fade' mode='out-in'>
            <component v-bind:is='currentTabComponent' class='tab'></component>
        </transition>
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
        currentTab: 'Person',
        tabs: [ 'Person', 'Company' ]
      }
    },

    methods: {
      ...mapActions(['registration']),

      sendData(data) {
        this.registration(data)
      },
    },

    computed: {
      currentTabComponent() {
        return this.currentTab.toLowerCase()
      }
    }

  }
</script>

<style lang='scss' scoped>

    .component-fade-enter-active,
    .component-fade-leave-active {
        transition: opacity 0.3s ease
    }

    .component-fade-enter,
    .component-fade-leave-to {
        opacity: 0
    }

    button {
        position: relative;
        background: transparent;
        box-shadow: none;
        border: 0;
        outline: none;
        padding-left: 20px;
        margin-bottom: 10px;

        &:before {
            content: '';
            left: 0;
            position: absolute;
            height: 13px;
            width: 13px;
            border-radius: 50%;
            border: 1px solid #000;
        }

        &.active:after {
            content: '';
            left: 4px;
            top: 50%;
            position: absolute;
            height: 7px;
            width: 7px;
            border-radius: 50%;
            background-color: #0498ef;
            transform: translateY(-50%);
        }
    }
</style>
