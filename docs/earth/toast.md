<demo-mobile location="https://ui.dullar.xyz/earth/#/toast"></demo-mobile>
## 扫码在手机上查看
<cli-qrcode name="toast"></cli-qrcode>
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