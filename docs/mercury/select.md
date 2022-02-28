<!--
 * @Author: yegl
 * @Date: 2022-02-28 11:15:40
 * @Last Modified by: yegl
 * @Last Modified time: 2022-02-28 13:49:46
 * @E-mail: yglgzyx@126.com
-->
<demo-pc location="https://ui.dullar.xyz/mercury/#/select"></demo-pc>

# select

## 基础用法(有禁用选项)

```vue
<yn-select v-model="value">
  <yn-option v-for="item in options" placeholder="请选择" :key="item.value" :label="item.label" :value="item.value" :disabled="item.disabled"><a>{{item.label}}</a></yn-option>
</yn-select>
```

## 禁用状态

```vue
<yn-select v-model="value" disabled>
  <yn-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></yn-option>
</yn-select>
```

## 自定义模板

```vue
<yn-select v-model="value1">
  <yn-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
    <span style="float: left">{{ item.label }}</span>
    <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
  </yn-option>
</yn-select>
```

## 分组

```vue
<yn-select v-model="value2">
  <yn-option-group v-for="group in groupOptions" :key= "group.label" :label="group.label">
    <yn-option v-for="item in group.options" :key="item.value" :label="item.label" :value="item.value">
      <span style="float: left">{{ item.label }}</span>
      <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
    </yn-option>
  </yn-option-group>
</yn-select>
```

## 多选(展示所有选项)

```vue
<yn-select v-model="multipleValue" multiple>
  <yn-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></yn-option>
</yn-select>
```

## 多选(行内展示)

```vue
<yn-select v-model="multipleValue1" multiple collapse-tags>
  <yn-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></yn-option>
</yn-select>
```

## 创建条目

```vue
<yn-select v-model="multipleValue2" multiple filterable>
  <yn-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></yn-option>
</yn-select>
```