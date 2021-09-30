<demo-mobile location="https://ui.dullar.xyz/mercury/#/button"></demo-mobile>
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

<yn-button iconName="iconback" iconColor="red">button with icon</yn-button>
```