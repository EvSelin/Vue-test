<template>
    <vue-dropzone
            ref='dropzone'
            id='drop1'
            :options='dropOptions'
            @vdropzone-file-added='afterChange'
            @vdropzone-removed-file='afterChange'
    ></vue-dropzone>
</template>

<script>
  import vueDropzone from 'vue2-dropzone';
  import 'vue2-dropzone/dist/vue2Dropzone.min.css'

  const getTemplate = () => `
    <div class='dz-preview dz-image-preview'>
      <div class='dz-image lol'>
        <img data-dz-thumbnail src='' alt=''>
      </div>
      <div class='dz-details'>
        <div class='dz-size'><span data-dz-size></span></div>
        <div class='dz-filename'><span data-dz-name></span></div>
      </div>
      <div class='dz-error-message'><span data-dz-errormessage></span></div>
      <div class='dz-success-mark'><i class='fa fa-check'></i></div>
      <div class='dz-error-mark'><i class='fa fa-close'></i></div>
    </div>
    `;

  export default {
    components: {
      vueDropzone
    },

    data: () => ({
      dropOptions: {
        previewTemplate: getTemplate(),
        autoProcessQueue: false,
        url: 'https://httpbin.org/post',
        maxFilesize: 2, // MB
        maxFiles: 4,
        chunking: true,
        chunkSize: 500, // Bytes
        thumbnailWidth: 150, // px
        thumbnailHeight: 150,
        addRemoveLinks: true
      }
    }),

    methods: {
      afterChange() {
        setTimeout(() => {
          this.$emit('input', this.$refs.dropzone.getQueuedFiles());
        }, 300)
      },
    }
  };
</script>

<style lang='scss' scoped>
    .vue-dropzone {
        border: 1px solid rgba(0, 0, 0, 0.5);
        border-radius: 3px;

        &.field_with_error {
            border-color: #f79483;;
        }
    }
</style>
