<template>
</template>

<script>
  export default{
    data: () => ({
    }),
    mounted() {
      let recaptchaScript = document.createElement('script')
      recaptchaScript.setAttribute('src', 'https://rawgit.com/erajasekar/astrochartjs/master/dist/astrochart.js')
      document.head.appendChild(recaptchaScript)
    }
  }
</script>