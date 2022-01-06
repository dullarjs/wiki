<template>
  <div class="mobile-box">
    <div class="logo-box" :class="this.loading ? '' : 'hide'">
      <img class="animation-logo" :src="logo">
    </div>
    <iframe :src="computedLocation" :class="this.loading ? 'hide' : ''" width="320px" @load="handleOnload" @error="handleOnError" height="568px"></iframe>
  </div>
</template>
<script>
import logo from "./images/logo.svg";
const random = Math.random();
export default {
  name: "DemoMobile",
  props: {
    location: String
  },
  computed: {
    computedLocation() {
      return this.location.replace("/#/", `/index.html?version=${random}#/`);
    }
  },
  data() {
    return {
      loading: true,
      logo
    }
  },
  methods: {
    handleOnload() {
      this.loading = false;
    },
    handleOnError() {
      window.location.reload();
    }
  }
};
</script>
<style type="text/css">
.mobile-box .hide {
  display: none;
}
.mobile-box {
  z-index: 10;
  position: fixed;
  right: 0px;
  top: 0px;
  background-image: url('./images/phone.png');
  background-size: 100%;
  width: 352px;
  height: 768px;
  overflow:  hidden;
  background-repeat: no-repeat;
}
.mobile-box  iframe {
  border: none;
  background: #fff;
  display: block;
  margin: 90px auto;
}
.mobile-box .logo-box {
  height: 100%;
  width: 100%;
}
.mobile-box .animation-logo {
  display: block;
  width: 50%;
  height: auto;
  margin: 70% auto;
}
</style>
