<demo-mobile location="https://ui.dullar.xyz/earth/#/dragable"></demo-mobile>
## 扫码在手机上查看
<cli-qrcode name="dragable"></cli-qrcode>
# dragable

```js
<template>
  <div id="d-container">
    <h2>yn-dragable</h2>
    <yn-dragable :boundary="boundary" :defaultRight="50" :defaultBottom="100" @click="handleClick">
      <div class="ball"></div>
    </yn-dragable>
  </div>
</template>
<script type="text/javascript">
  export default {
    name: "YnDragablePage",
    data() {
      return {
        boundary: {
          left: 20,
          right: 20,
          top: 50,
          bottom: 100
        }
      };
    },
    methods: {
      handleClick() {
        this.Toast("点击了");
      }
    }
  };
</script>

<style type="text/css" scoped="scoped">
  .ball {
    background: gray;
    width:  50px;
    height:  50px;
    border-radius: 50%;
    background: linear-gradient(#36455b, #283446);
    box-shadow: inset 0 1px 0 rgb(255 255 255 / 20%), 0 0 8px rgb(0 0 0 / 30%), 0 12px 12px rgb(0 0 0 / 40%);
  }
</style>

```