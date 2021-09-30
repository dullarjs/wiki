<demo-mobile location="https://ui.dullar.xyz/earth/#/dialog"></demo-mobile>
# dialog

## Async alert
```js
this.Dialog.alert({
  title: "这个是标题",
  message: "这个是内容",
  beforeClose: (e) => {// 关闭之前的回调事件
    // e代表点击了哪个事件
  },
  afterClose: () => {// 关闭之后的回调事件
    this.Toast("彻底关闭了");
  }
});
```

## Sync alert
```js
this.Dialog.alert({ title: "这个是标题", message: "这个是内容" });
```

## Sync cancel, Async confirm
```js
this.Dialog.confirm({
  title: "这个是标题",
  message: "这个是内容",
  beforeClose: () => {}
});
```

## Async cancel, Async confirm
```js
this.Dialog.confirm({
  title: "这个是标题",
  message: "这个是内容",
  beforeClose: (e) => {
    console.log("这个是会告诉你点击了哪个按钮", e);
    return new Promise((resolve, reject) => {
      console.log(reject);
      setTimeout(() => {
        resolve("请求结束");
      }, 3000);
    }).catch(err => {
      console.log("错误信息在这里展示", err);
    });
  }
});
```

## html
```js
this.Dialog.confirm({
  title: "这个是标题",
  message: "<span>我是span标签</span><br/>我换行了",
  beforeClose: (e) => {
    console.log("这个是会告诉你点击了哪个按钮", e);
    return new Promise((resolve, reject) => {
      console.log(reject);
      setTimeout(() => {
        resolve("请求结束");
      }, 3000);
    }).catch(err => {
      console.log("错误信息在这里展示", err);
    });
  }
});
```
## advanced
```vue
<yn-dialog v-model="show" closeModelOnClick>
  <img src="https://img.yzcdn.cn/vant/apple-3.jpg" />
</yn-dialog>
```
## advanced modal click callback
```vue
<yn-dialog
  :value="this.show2"
  @buttonClick="this.handleInput"
  @modalClick="this.handleClick"
>
  <img src="https://img.yzcdn.cn/vant/apple-3.jpg" />
</yn-dialog>
```
## 异步加载数据渲染问题
```vue
<yn-dialog :value="this.show3" closeModelOnClick>
  <span>我是固定内容，我后面的是动态内容{{ text.value }}</span>
</yn-dialog>
```


