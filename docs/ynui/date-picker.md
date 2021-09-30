<demo-mobile location="https://ui.dullar.xyz/earth/#/datePicker"></demo-mobile>
# date-picker

## default
```vue
<yn-date-picker v-model="show" @confirm="handleConfirm"></yn-date-picker>
```
## custom
```vue
<yn-date-picker
  v-model="show2"
  start="2021-01-21"
  end="2031-12-30"
  defaultDate="2021-01-21"
  confirmText="confirm"
  cancelText="cancel"
  title="Date"
  @confirm="handleConfirm"
></yn-date-picker>
```