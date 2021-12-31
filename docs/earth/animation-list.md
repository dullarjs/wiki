<demo-mobile location="https://ui.dullar.xyz/earth/#/animation-list"></demo-mobile>

## 扫码在手机上查看
<cli-qrcode name="animation-list"></cli-qrcode>
# animation-list

::: warning 注意
刷新页面查看当前组件效果
:::
```vue
<yn-animation-list :dataList="asyncData">
  <yn-animation-list-item style="borderBottom: 1px solid #eee;line-height: 100px" height="100" v-for="i in asyncData" :key="i">
    <span>这是第{{i}}个元素</span>
  </yn-animation-list-item>
</yn-animation-list>
```
```js
...
methods: {
  getData() {
    setTimeout(() => {
      for (let i = 0; i < 200; i++) {
        this.asyncData.push(i);
      }  
    }, 1000);
  }
},
mounted() {
  this.getData();
}
...
```