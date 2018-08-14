<template>
    <label :class='{ filled: value }'>
        <span>{{ label }}</span>
        <input :type='type' v-model='value' @input='updateValue($event.target.value)' />
    </label>
</template>

<script>
  export default {
    name: 'AnimatedField',
    props: ['label', 'type'],

    data() {
      return {
        value: ''
      }
    },

    mounted() {
      let el = this.$el.querySelector('input');
      const autoFillClass = 'filled';
      const onAutoFillStart = (el) => el.parentNode.classList.add(autoFillClass);
      const onAutoFillCancel = (el) => el.parentNode.classList.remove(autoFillClass);

      const onAnimationStart = ({ target, animationName }) => {
        switch (animationName.split('-')[0]) {

          case 'onAutoFillStart':
            return onAutoFillStart(target);

          case 'onAutoFillCancel':
            if (!el.value && !el.placeholder) {
              return onAutoFillCancel(target)
            }
        }
      };

      el.addEventListener('animationstart', onAnimationStart, false);
    },

    computed: {
      valuePresents() {
        return this.value !== '';
      }
    },

    methods: {
      updateValue(value) {
        this.$emit('input', value);
      }
    },
  }
</script>

<style lang='scss' scoped>

    label {
        position: relative;
        display: inline-block;

        &.filled {
            span {
                top: 5px;
                font-size: 14px;
            }
        }

        &.field_with_error {
            color: #f79483;

            input {
                border-color: #f79483
            }
        }

        > * {
            font-size: 16px;
            transition: all 0.2s ease-in-out;
        }

        span {
            position: absolute;
            left: 15px;
            top: calc(50% - 9px);
            text-transform: capitalize;
        }

        input {
            border: 1px solid rgba(#000, 0.5);
            padding: 20px 15px 3px 15px;
            border-radius: 3px;
            background-color: transparent;
            outline: none;
        }
    }

    @keyframes onAutoFillStart { from {/**/} to {/**/} }
    @keyframes onAutoFillCancel { from {/**/} to {/**/} }

    input:-webkit-autofill {
        animation-name: onAutoFillStart;
        transition: background-color 50000s ease-in-out 0s;
    }

    input:not(:-webkit-autofill) {
        animation-name: onAutoFillCancel;
    }

</style>
