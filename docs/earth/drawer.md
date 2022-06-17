<demo-mobile location="https://ui.dullar.xyz/earth/#/drawer"></demo-mobile>
## 扫码在手机上查看
<cli-qrcode name="drawer"></cli-qrcode>
# drawer


```vue
<yn-drawer :closable="closable" title="看到我的标题了吗" v-model="popup1" position="bottom">
  <div class="popup-content">
    底部出现遮罩
    <template v-for="item in 10">
      <h3 :key="item">我是{{ item }}</h3>
    </template>
  </div>
</yn-drawer>
```


```vue
<yn-drawer @submit="handleOnSubmit" ref="drawer3" showFooter v-model="popup2" :closable="closable" title="你看到的未必是真实的，我隐藏了很多你相信吗">
  <div class="popup-content">我说我有点飘你还不信</div>
</yn-drawer>
```


```vue
<yn-drawer showFooter v-model="popup3"  position="top" :showCloseIcon="true">
  <div class="popup-content">看我的footer，如果有自定义footer不管showFooter是否设置，都将会显示自定义footer</div>
  <div slot="footer" >我是想告诉你footer可以自己定义</div>
</yn-drawer>
```


```vue
<yn-drawer showFooter v-model="popup4" submitButtonText="我换了个文案" position="bottom" :showCloseIcon="true">
  <div class="popup-content">
    <yn-button @click="handleClick(5)">打开内层</yn-button>
    上面出现遮罩，底部按钮没有绑定任何关闭事件
    <yn-drawer v-model="popup5"  position="bottom">
      <div class="popup-content">
        内层嵌套
      </div>
    </yn-drawer>
  </div>
</yn-drawer>
```


```vue
<yn-drawer showFooter v-model="popup6" @afterVisibleChange="handleVisibleChange" position="middle" :showCloseIcon="true" fixed>
  <div class="popup-content">钩子函数</div>
</yn-drawer>
```

公共JS部分
```vue
<script>
// import "./style.less";
export default {
  name: "YnPopupPage",
  data() {
    return {
      closable: true,
      popup1: false,
      popup2: false,
      popup3: false,
      popup4: false,
      popup5: false,
      popup6: false
    };
  },
  methods: {
    handleOnSubmit() {
      this.$refs.drawer3.close();
    },
    handleClick(num) {
      this[`popup${num}`] = !this[`popup${num}`];
    },
    handleVisibleChange(status) {
      this.Toast(status);
    }
  }
};
</script>
```