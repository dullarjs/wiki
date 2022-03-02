<demo-mobile location="https://ui.dullar.xyz/earth/#/indicator"></demo-mobile>
## 扫码在手机上查看
<cli-qrcode name="indicator"></cli-qrcode>
# indicator

|  props   | 默认值  | 类型 | 可选值 | 说明 |  备注  |
|  ----  | ----  | ---- |  ---- | ---- | ---- |
| text |  "" | string | | 显示的文案 |
| spinType | "snake" | string | doubleBounce, fadingCircle, snake , tripleBounce, rotate  | loading样式图案 |
| spinColor | "#ccc" | string
| background | "#fff" | string | | 背景层颜色
| size | 28 | stirng或number | | loading的icon大小 |
| lockScreen | false | boolean | | 是否锁定HTML文档（overflow hidden）
| transparent | true | boolean | | 弹窗背景层是否穿透层

### basic usage

``` js
this.Indicator.open({ text: "doubleBounce", spinType: "doubleBounce" });
```

``` js
this.Indicator.open({ text: "fadingCircle", spinType: "fadingCircle" });
```

``` js
this.Indicator.open({ text: "snake", spinType: "snake" });
```

``` js
this.Indicator.open({ text: "tripleBounce", spinType: "tripleBounce" });
```

``` js
this.Indicator.open({ text: "rotate", spinType: "rotate", lockScreen: true, background: "transparent" });
```

``` js
this.Indicator.open({ text: "rotate", spinType: "rotate", background: "transparent" });
```