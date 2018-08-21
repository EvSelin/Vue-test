<template>
    <div>
        <form action=''>
            <div class='input-group'>
                <AnimatedField label='company title' type='text' :class="{ 'field_with_error': $v.model.companyTitle.$error }" v-model.trim="$v.model.companyTitle.$model"/>
            </div>

            <div class='input-group'>
                <AnimatedField label='e-mail' type='email' :class="{ 'field_with_error': $v.model.email.$error }" v-model.trim='$v.model.email.$model'/>
                <AnimatedField label='phone Number' type='tel' :class="{ 'field_with_error': $v.model.phone.$error }" v-model.trim='$v.model.phone.$model'/>
            </div>
            <div class='input-group'>
                <AnimatedField label='password' type='password' :class="{ 'field_with_error': $v.model.password.$error }" v-model.trim='$v.model.password.$model'/>
                <AnimatedField label='repeat password' type='password' :class="{ 'field_with_error': $v.model.repeatPassword.$error }" v-model.trim='$v.model.repeatPassword.$model'/>
            </div>
            <br>
            <label :class="{ 'field_with_error': $v.terms.$error }">
                <input type='checkbox' v-model.trim='$v.terms.$model'>
                <router-link tag='a' to='/terms'>Terms and Conditions</router-link>
            </label>
            <br>
            <br>
            <DropZone ref='Dropzone' :class="{ 'field_with_error': $v.model.files.$error }" v-model='model.files'></DropZone>
            <br>
            <v-btn color='blue' @click.prevent='submit()'>Submit</v-btn>
        </form>
    </div>
</template>

<script>
  import { required, minLength, sameAs, email, numeric } from 'vuelidate/lib/validators'
  import AnimatedField from '../AnimatedField';
  import DropZone from  '../DropZone'

  export default {
    name: 'Company',
    components: { AnimatedField, DropZone },

    data() {
      return {
        submitStatus: null,
        terms: false,
        model: {
          companyTitle: '',
          email: '',
          phone: '',
          password: '',
          repeatPassword: '',
          files: '',
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
        },

        files: {
          required,
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
