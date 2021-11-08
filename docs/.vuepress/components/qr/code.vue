<template>
  <img class="qrcode" :src="this.qrcode">
</template>
<script type="text/javascript">
  export default {
    name: "QrCode",
    props: {
      name: String
    },
    computed: {
      qrcode() {
        return require(`./${this.name}-qrcode.png`);
      }
    }
  }
</script>
<style type="text/css">
  .qrcode {
  }
</style>