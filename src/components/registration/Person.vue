<template>
    <div>
        <form action=''>
            <div class='input-group'>
                <label>
                    <span>First Name</span>
                    <br>
                    <input type='text' :class="{ 'field_with_error': $v.model.userName.$error }" v-model.trim='$v.model.userName.$model'>
                </label>
                <br>
                <label>
                    Last Name
                    <br>
                    <input type='text' :class="{ 'field_with_error': $v.model.lastName.$error }" v-model.trim='$v.model.lastName.$model'>
                </label>
            </div>

            <div class='input-group'>
                <label>
                    E-mail
                    <br>
                    <input type='email' v-model='model.email' :class="{ 'field_with_error': $v.model.email.$error }" v-model.trim='$v.model.email.$model'>
                </label>
                <br>
                <label>
                    Phone Number
                    <br>
                    <input type='tel' v-model='model.phone' :class="{ 'field_with_error': $v.model.phone.$error }" v-model.trim='$v.model.phone.$model'>
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
    name: 'Person',

    data() {
      return {
        submitStatus: null,
        model: {
          userName: '',
          lastName: '',
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
        userName: {
          required,
          minLength: minLength(4)
        },

        lastName: {
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

<style lang='scss' scoped>

</style>
