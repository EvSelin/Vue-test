<template>
    <div>
        <form action="">
            <label>
                E-mail
                <br>
                <input type='email' :class="{ 'field_with_error': $v.model.email.$error }" v-model.trim='$v.model.email.$model'>
            </label>
            <br>
            <label>
                Password
                <br>
                <input type='password' :class="{ 'field_with_error': $v.model.password.$error }" v-model.trim='$v.model.password.$model'>
            </label>
            <br>
            <button @click.prevent='submit()'>Submit</button>
        </form>
    </div>
</template>

<script>
  import { mapActions } from 'vuex'
  import { required, minLength, email,  } from 'vuelidate/lib/validators'

  export default {
    name: 'authorization',

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
