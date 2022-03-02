<demo-mobile location="https://ui.dullar.xyz/earth/#/toast"></demo-mobile>
## 扫码在手机上查看
<cli-qrcode name="toast"></cli-qrcode>
|  props   | 默认值  | 类型 | 可选值 | 说明 |  备注  |
|  ----  | ----  | ---- |  ---- | ---- | ---- |
|  message     |   ""    |  string    |       |   显示文案   |      |  
|    position    |   "middle"    |   string   |   "bottom" 底部显示, "middle" 中间显示, "top" 顶部显示   |      |      
|    duration    |   3000    |   number   |       |    显示持续时间  |    单位是毫秒 |  
# toast

### basic usage


``` js
this.Toast("Hello, world");
```


### Set toast position


``` js
this.Toast({
  message: "hello, middle",
  position: "middle"
});

this.Toast({
  message: "hello, middle",
  position: "bottom"
});
```