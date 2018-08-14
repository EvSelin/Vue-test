<template>
    <div>
        <form action=''>
            <div class='input-group'>
                <label>
                    Company title
                    <br>
                    <input type='text' :class="{ 'field_with_error': $v.model.companyTitle.$error }" v-model.trim='$v.model.companyTitle.$model'>
                </label>
            </div>
            <div class='input-group'>
                <label>
                    E-mail
                    <br>
                    <input type='email' :class="{ 'field_with_error': $v.model.email.$error }" v-model.trim='$v.model.email.$model'>
                </label>
                <br>
                <label>
                    Phone Number
                    <br>
                    <input type='tel' :class="{ 'field_with_error': $v.model.phone.$error }" v-model.trim='$v.model.phone.$model'>
                </label>
            </div>
            <div class='input-group'>
                <label>
                    Password
                    <br>
                    <input type='password' :class="{ 'field_with_error': $v.model.password.$error }" v-model.trim='$v.model.password.$model'>
                </label>
                <br>
                <label>
                    Repeat password
                    <br>
                    <input type='password' :class="{ 'field_with_error': $v.model.repeatPassword.$error }" v-model.trim='$v.model.repeatPassword.$model'>
                </label>
            </div>
            <br>
            <button @click.prevent='submit()'>Submit</button>
        </form>
    </div>
</template>

<script>
  import { required, minLength, sameAs, email, numeric } from 'vuelidate/lib/validators'

  export default {
    name: 'Company',

    data() {
      return {
        submitStatus: null,
        model: {
          companyTitle: '',
          email: '',
          phone: '',
          password: '',
          repeatPassword: '',
        }
      }
    },

    methods: {
      dropData() {
        this.$parent.sendData(this.model)
      },

      submit() {
        this.$v.$touch();

        if (this.$v.$invalid) {
          this.submitStatus = 'ERROR'
        }

        else {
          this.dropData();
          this.submitStatus = 'PENDING';

          setTimeout(() => {
            this.submitStatus = 'OK'
          }, 500)
        }
      }
    },

    validations: {
      model: {
        companyTitle: {
          required,
          minLength: minLength(4)
        },

        email: {
          required,
          email
        },

        phone: {
          required,
          minLength: minLength(9),
          numeric
        },

        password: {
          required,
          minLength: minLength(8)
        },

        repeatPassword: {
          sameAsPassword: sameAs('password')
        }
      }
    }
  }

</script>

<style scoped>

</style>
