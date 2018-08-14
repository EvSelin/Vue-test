<template>
    <div>
        <form action=''>
            <div class='input-group'>
                <AnimatedField label='company title' type='text' :class="{ 'field_with_error': $v.model.companyTitle.$error }" v-model.trim="$v.model.companyTitle.$model"/>
            </div>

            <div class='input-group'>
                <AnimatedField label='e-mail' type='email' :class="{ 'field_with_error': $v.model.email.$error }" v-model.trim="$v.model.email.$model"/>
                <AnimatedField label='phone Number' type='tel' :class="{ 'field_with_error': $v.model.phone.$error }" v-model.trim="$v.model.phone.$model"/>
            </div>
            <div class='input-group'>
                <AnimatedField label='password' type='password' :class="{ 'field_with_error': $v.model.password.$error }" v-model.trim="$v.model.password.$model"/>
                <AnimatedField label='repeat password' type='password' :class="{ 'field_with_error': $v.model.repeatPassword.$error }" v-model.trim="$v.model.repeatPassword.$model"/>
            </div>
            <button @click.prevent='submit()'>Submit</button>
        </form>
    </div>
</template>

<script>
  import { required, minLength, sameAs, email, numeric } from 'vuelidate/lib/validators'
  import AnimatedField from '../AnimatedField';

  export default {
    name: 'Company',
    components: { AnimatedField },

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
