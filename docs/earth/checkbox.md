<demo-mobile location="https://ui.dullar.xyz/earth/#/checkbox"></demo-mobile>
## 扫码在手机上查看
<cli-qrcode name="checkbox"></cli-qrcode>
# checkbox

```vue
<template>
  <div>
    <h2>yn-checkbox</h2>
    <yn-checkbox v-model="checked" @change="handleClick"></yn-checkbox>
    <span>当前状态{{ checked }}</span>
    <hr />
    <yn-checkbox :checked="value"></yn-checkbox>
    <span>此状态不可修改{{ value }}</span>
  </div>
</template>
<script type="text/javascript">
export default {
  name: "YnCheckboxPage",
  data() {
    return {
      checked: false,
      value: true
    };
  },
  methods: {
    handleClick(e) {
      console.log("改变状态了", e);
    }
  }
};
</script>

```