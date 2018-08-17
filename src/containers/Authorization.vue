<template>
    <div>
        <form action="">
            <AnimatedField label='E-mail' type='email' :class="{ 'field_with_error': $v.model.email.$error }" v-model.trim="$v.model.email.$model"/>
            <br>
            <AnimatedField label='password' type='password' :class="{ 'field_with_error': $v.model.password.$error }" v-model.trim="$v.model.password.$model"/>
            <br>
            <button @click.prevent='submit()'>Submit</button>
        </form>
    </div>
</template>

<script>
  import { mapActions } from 'vuex'
  import { required, minLength, email,  } from 'vuelidate/lib/validators'
  import AnimatedField from '../components/AnimatedField';

  export default {
    name: 'authorization',
    components: { AnimatedField },

    data() {
      return {
        submitStatus: null,
        model: {
          email: '',
          password: ''
        }
      }
    },

    methods: {
      ...mapActions(['authorization']),

      submit() {
        this.$v.$touch();

        if (this.$v.$invalid) {
          this.submitStatus = 'ERROR'
        }

        else {
          this.authorization(this.model);
          this.submitStatus = 'PENDING';

          setTimeout(() => {
            this.submitStatus = 'OK'
          }, 500)
        }
      }
    },

    validations: {
      model: {
        email: {
          required,
          email
        },

        password: {
          required,
          minLength: minLength(8)
        },
      }
    }
  }
</script>

<style scoped>

</style>
