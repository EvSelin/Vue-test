<template>
    <div>
        <form action=''>
            <div class='input-group'>
                <AnimatedField label='first name' type='text' :class="{ 'field_with_error': $v.model.userName.$error }" v-model.trim='$v.model.userName.$model'/>
                <AnimatedField label='last name' type='text' :class="{ 'field_with_error': $v.model.lastName.$error }" v-model.trim='$v.model.lastName.$model'/>
            </div>

            <div class='input-group'>
                <AnimatedField label='E-mail' type='email' :class="{ 'field_with_error': $v.model.email.$error }" v-model.trim='$v.model.email.$model'/>
                <AnimatedField label='Phone Number' type='tel' :class="{ 'field_with_error': $v.model.phone.$error }" v-model.trim='$v.model.phone.$model'/>
            </div>
            <div class='input-group'>
                <AnimatedField label='Password' type='password' :class="{ 'field_with_error': $v.model.password.$error }" v-model.trim='$v.model.password.$model'/>
                <AnimatedField label='Repeat password' type='password' :class="{ 'field_with_error': $v.model.repeatPassword.$error }" v-model.trim='$v.model.repeatPassword.$model'/>
            </div>
            <label :class="{ 'field_with_error': $v.terms.$error }">
                <input type='checkbox' v-model.trim='$v.terms.$model'>
                <router-link tag='a' to='/terms'>Terms and Conditions</router-link>
            </label>
            <br>
            <br>
            <v-btn color='blue' @click.prevent='submit()'>Submit</v-btn>
        </form>
    </div>
</template>

<script>
  import { required, minLength, sameAs, email, numeric } from 'vuelidate/lib/validators'
  import AnimatedField from '../AnimatedField';

  export default {
    name: 'Person',
    components: { AnimatedField },

    data() {
      return {
        submitStatus: null,
        terms: false,
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
      },

      terms: {
        sameAs: sameAs( () => true)
      }
    }
  }
</script>

<style lang='scss' scoped>

    .input-group {
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        > * {
            margin-bottom: 10px;
        }
    }

    label.field_with_error a {
        color: #f79483;
    }

</style>
