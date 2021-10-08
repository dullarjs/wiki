<demo-pc location="https://ui.dullar.xyz/mercury/#/input"></demo-pc>
# input

## 基础用法

```vue
<yn-input/>
```

## 默认长度

```vue
<yn-input maxlength="3" placeholder="默认长度为3"/>
```

## textarea

```vue
<yn-input v-model="v" type="textarea" width="300" height="100"/>
```

## 密码

```vue
<yn-input v-model="v" showPassword/>
```

## 可清除

```vue
<yn-input clear search v-model="v" placeholder="可清除"/>
```

## 前插槽

```vue
<yn-input v-model="v">
  <template v-slot:prepend>
    <div class="prepend_demo">http://</div>
  </template>
</yn-input>
```

## 后插槽

```vue
<yn-input v-model="v">
  <template v-slot:append>
    <div class="prepend_demo">.com</div>
  </template>
</yn-input>
```

## 无边框（底线）

```vue
<yn-input type="text" underline/>
```