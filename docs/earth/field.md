<demo-mobile location="https://ui.dullar.xyz/earth/#/field"></demo-mobile>
# field

## basic usage
```vue
<yn-field-group>
  <yn-field v-model="basicUsage" placeholder="请输入内容"></yn-field>
</yn-field-group>
```

## numeric type
```vue
<yn-field
  v-model="phoneNumber"
  label="手机号码"
  type="number"
  min="3"
  max="10"
  placeholder="phone number"
  pattern="[0-9]*"
></yn-field>
```

## password
```vue
<yn-field
  v-model="userPassword"
  label="用户密码"
  type="password"
  placeholder="password"
></yn-field>
```

## readonly
```vue
<yn-field
  v-model="readonly"
  label="证件信息"
  type="text"
  readonly
></yn-field>
```
## disabled
```vue
<yn-field
  v-model="disabled"
  label="关键信息"
  type="text"
  disabled
></yn-field>
```
## has clear icon
```vue
<yn-field
  v-model="clear"
  label="清除icon"
  type="text"
  clearable
></yn-field>
```

## custom icon
```vue
<yn-field
  v-model="customIcon"
  label="自定义icon"
  iconName="iconarrow_right_gray"
  type="text"
></yn-field>
```

::: tip
[Valid iconName list](../yui/iconfont.md) 
:::


## custom label
```vue
<yn-field
  v-model="customLabel"
>
  <div slot="label">自定义label</div>
</yn-field>
```

## textarea
```vue
<yn-field
  v-model="textarea"
  label="textarea"
  type="textarea"
  maxlength="50"
  showTextareaCounter
  clearable
></yn-field>
```

## mixed
```vue
<yn-field-group>
  <yn-field v-model="ynName" label="中文姓名"></yn-field>
  <yn-field v-model="ynPhone" label="手机号码"></yn-field>
  <yn-field v-model="ynIdType" label="证件类型"></yn-field>
  <yn-field v-model="ynIdNo" label="证件号码"></yn-field>
  <yn-field
    v-model="ynIdNoEncrpt"
    label="加密证件"
    encrypted
  ></yn-field>
  <yn-field v-model="ynBirthday" label="出生日期"></yn-field>
</yn-field-group>
```
