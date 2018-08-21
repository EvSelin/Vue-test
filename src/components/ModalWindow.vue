<template>
    <transition name='modal'>
        <div class='modal-mask'>
            <div class='modal-wrapper'>
                <div class='modal-container'>

                    <div class='modal-header'>
                        <slot name='header'/>
                    </div>

                    <div class='modal-body'>
                        <slot name='body'/>
                    </div>

                    <div class='modal-action'>
                        <slot name='footer'>
                            <v-btn color='red' @click='triggerModal(false)'>Close</v-btn>
                        </slot>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    name: 'ModalWindow',

    data() {
      return {
      }
    },

    mounted: function () {
      document.addEventListener('keydown', (e) => {
        if (this.$store.state.modalVisible && e.keyCode === 27) {
          this.triggerModal(false)
        }
      });
    },

    methods: {
      ...mapActions([
        'triggerModal'
      ]),
    }
  }

</script>

<style lang='scss' scoped>

    .modal-mask {
        position: fixed;
        display: table;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(#000, .5);
        transition: opacity .3s ease;
    }

    .modal-wrapper {
        display: table-cell;
        vertical-align: middle;
    }

    .modal-container {
        width: 300px;
        margin: 0 auto;
        padding: 20px 30px;
        background-color: #fff;
        border-radius: 2px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
        transition: all .3s ease;
    }

    .modal-body {
    }

    .modal-enter,
    .modal-leave-active {
        opacity: 0;
    }

    .modal-enter .modal-container,
    .modal-leave-active .modal-container {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }

</style>
