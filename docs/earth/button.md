<demo-mobile location="https://ui.dullar.xyz/earth/#/button"></demo-mobile>

## 扫码在手机上查看
<cli-qrcode name="button"></cli-qrcode>
# button

```vue
<yn-button @click="handleClick"><span>这是文案，可点击</span></yn-button>

<yn-button disabled><span>禁止点击</span></yn-button>

<yn-button :loading="true" loadingColor="red"><span>这是文案</span></yn-button>

<yn-button :loading="true" size="large" loadingColor="green"><span>这是文案</span></yn-button>

<yn-button :loading="true" size="small"><span>我不可以点击</span></yn-button>

<yn-button type="danger">危险</yn-button>

<yn-button type="primary">主题色</yn-button>

<yn-button type="warning">警告</yn-button>

<yn-button type="primary" plain>plain</yn-button>

<yn-button type="warning" plain>plain</yn-button>

<yn-button :loading="true" loadingText="loading text">plain</yn-button>

<yn-button iconName="elm" iconColor="red">button with icon</yn-button>
```