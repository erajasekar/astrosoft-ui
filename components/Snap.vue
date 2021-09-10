<template>
</template>

<script>
  export default{
    data: () => ({
    }),
    mounted() {
      let recaptchaScript = document.createElement('script')
      recaptchaScript.setAttribute('src', 'http://cdn.jsdelivr.net/snap.svg/0.2.0/snap.svg.js')
      document.head.appendChild(recaptchaScript)
    }
  }
</script>