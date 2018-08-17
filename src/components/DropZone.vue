<template>
    <div id='app'>
        <vue-dropzone
                ref='dropzone'
                id='drop1'
                :options='dropOptions'
                @vdropzone-complete='afterComplete'
                @vdropzone-file-added='afterAdd'
                @vdropzone-canceled='afterCanceled'
        ></vue-dropzone>
        <!--<button @click='removeAllFiles'>Remove All Files</button>-->
    </div>
</template>

<script>
  import vueDropzone from 'vue2-dropzone';
  import 'vue2-dropzone/dist/vue2Dropzone.min.css'


  export default {
    data: () => ({
      dropOptions: {
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
    components: {
      vueDropzone
    },
    methods: {
      afterAdd(file) {
        setTimeout(() => {
          this.$emit('input', this.$refs.dropzone.getQueuedFiles() )
        }, 500)

      },

      afterCanceled(file) {
      },

      afterComplete(file) {
      },
      removeAllFiles() {
        this.$refs.dropzone.removeAllFiles();
      }
    }
  };
</script>
