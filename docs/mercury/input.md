<!--
 * @Author: yegl
 * @Date: 2022-02-28 09:37:32
 * @Last Modified by: yegl
 * @Last Modified time: 2022-02-28 10:55:25
 * @E-mail: yglgzyx@126.com
-->
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

## 输入建议

```vue
<yn-autocomplete v-model="value" :haddleSearch="querySearch" @select="handleSelect" iconName="down-arrow">
```

## 输入建议(自定义模板)

```vue
<yn-autocomplete v-model="value" :haddleSearch="querySearch" @select="handleSelect">
  <template v-slot:customize="item">
    <div class="value">{{ item.value }}</div>
    <span class="name">{{ item.goods_name }}</span>
  </template>
</yn-autocomplete>
```

## 输入建议(自定义模板-异步获取)

```vue
<yn-autocomplete v-model="value" :haddleSearch="querySearchL" @select="handleSelect" showLoading>
  <template v-slot:customize="item">
    <div class="value">{{ item.value }}</div>
    <span class="name">{{ item.goods_name }}</span>
  </template>
</yn-autocomplete>
```