
## 扫码在手机上查看
<cli-qrcode name="mars/dialog"></cli-qrcode>
# dialog

## 基本用法
```vue
<yn-dialog :visible.sync="dialogVisible">
  <span slot="footer">
    <button class="btn btn--default" @click="dialogVisible = false">取消</button>
    <button class="btn btn--primary" @click="dialogVisible = false">确定</button>
  </span>
</yn-dialog>
```

## 嵌套
```vue
<yn-dialog :visible.sync="outerVisible" title="外层Dialog">
  <yn-dialog :visible.sync="innerVisible" title="内层Dialog">
  </yn-dialog>
  <span slot="footer">
    <button class="btn btn--default" @click="outerVisible = false">取消</button>
    <button class="btn btn--primary" @click="innerVisible = true">打开内侧Dialog</button>
  </span>
</yn-dialog>
```


