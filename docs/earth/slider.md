<demo-mobile location="https://ui.dullar.xyz/earth/#/slider"></demo-mobile>
## 扫码在手机上查看
<cli-qrcode name="slider"></cli-qrcode>
# slider

## basic usage

```vue
<yn-slider v-model="value"></yn-slider>
```


## set steps
```vue
<yn-slider v-model="value" step="10"></yn-slider>
```

## change drag icon
```vue
<yn-slider
  v-model="value"
  :dragIcon="dragIcon"
  :parse="parse"
  tip
></yn-slider>
```
```js
const dragIcon = require("./drag.svg");
function parse(e) {
  if (e === 0) {
    return "min value";
  } else if (e === 100) {
    return "max value";
  }
  return `custom value is ${e}`;
}
```

## show tips
```vue
<h3>tip value {{ value4 }}</h3>
<yn-button type="primary" @click="update" class="update">更新</yn-button>
<yn-button type="primary" @click="set" class="update">自定义</yn-button>
<span class="display"></span>
<yn-slider ref="slider4" v-model="value4" :parse="doubleValue" tip></yn-slider>
```
```js
function update() {
  this.value4 = { start: 0, end: 100 };
}
function set() {
  this.$refs.slider4.set({ start: 10, end: 50 });
}
function doubleValue(e) {
  return e * 10;
}
```




## dynamic register slider component

```vue
<yn-dropdown-menu>
  <yn-dropdown-menu-item
    v-model="value8"
    ref="closeAble"
    @afterEnter="handleBeforeEnter"
  >
    <div style="height: 100px;width: 90%;margin: 0 auto;">
      <yn-slider class="dropdown-slider" v-if="visiable1" v-model="value5" :parse="doubleValue" tip></yn-slider>
    </div>
  </yn-dropdown-menu-item>
</yn-dropdown-menu>
```
```js
function handleBeforeEnter() {
  this.visiable1 = !this.visiable1;
}
function doubleValue(e) {
  return e * 10;
}
```











## inside popup component
```vue
<yn-popup v-model="visiable">
  <div class="box">
    <yn-slider v-if="visiable" v-model="value5" :parse="doubleValue" tip></yn-slider>
  </div>
</yn-popup>
```

















