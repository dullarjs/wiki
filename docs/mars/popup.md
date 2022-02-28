
## 扫码在手机上查看
<cli-qrcode name="mars/popover"></cli-qrcode>
# popup


```vue
<yn-popover
  :visible.sync="popoverVisible1"
  :width="200"
  :title="'提示'"
>
  <template v-slot:reference>
    <button >click激活,下边展示</button>
  </template>
</yn-popover>
```


```vue
<yn-popover
  :visible.sync="popoverVisible2"
  :placement="'top-end'"
  :width="150"
>
  <template v-slot:reference>
    <button >click激活,上边展示</button>
  </template>
</yn-popover>
```


```vue
<yn-popover
  :visible.sync="popoverVisible3"
  :width="200"
  :placement="'left-end'"
>
  <template v-slot:reference>
    <button >click激活,左边展示</button>
  </template>
</yn-popover>
```

```vue
<yn-popover
  :visible.sync="popoverVisible4"
  :width="200"
  :placement="'right'"
>
  <template v-slot:reference>
    <button >click激活,右边展示</button>
  </template>
</yn-popover>
```

```vue
<yn-popover
  :visible.sync="popoverVisible5"
  :width="200"
  :placement="'top'"
  :trigger="'hover'"
>
  <template v-slot:reference>
    <button >hover激活,上边展示</button>
  </template>
</yn-popover>
```

```vue
<yn-popover
  :visible.sync="popoverVisible6"
  :width="200"
  :placement="'top'"
>
  <p>这是一段内容这是一段内容确定删除吗？</p>
  <div style="text-align: right; margin: 0">
    <button size="mini" type="text" @click="handleDel">取消</button>
    <button type="primary" size="mini" @click="handleDel">确定</button>
  </div>
  <template v-slot:reference>
    <button >删除</button>
  </template>
</yn-popover>
```
