<template>
  <img class="qrcode" :src="this.qrcode">
</template>
<script type="text/javascript">
  export default {
    name: "CliQrcode",
    props: {
      name: String
    },
    computed: {
      qrcode() {
        return require(`./qr/${this.name}.png`);
      }
    }
  }
</script>
<style type="text/css">
  .qrcode {
    width: 200px;
    height: auto;
  }
</style>