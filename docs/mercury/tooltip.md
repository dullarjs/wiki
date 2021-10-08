<demo-pc width="150%" location="https://ui.dullar.xyz/mercury/#/tooltip"></demo-pc>
# tooltip

## top
```vue
<yn-tooltip
  trigger="hover"
  placement="top"
  content="top我是tooltip撒旦发生口角是否数据库恢复瑟夫数据返回上课时间发货时间看"
>
  <yn-button class="mt30 new-position" style="z-index: 2" type="text"
    >top</yn-button
  >
</yn-tooltip>
```

## left

```vue
<yn-tooltip
  trigger="hover"
  placement="left"
  content="left我是tooltip撒旦发生口角是否数据库恢复瑟夫数据返回上课时间发货时间看"
>
  <yn-button class="mt30" type="text">left </yn-button>
</yn-tooltip>
```

## right

```vue
<yn-tooltip
  trigger="hover"
  placement="right"
  effect="light"
  content="right我是撒旦发生撒旦发生口角是否数据库恢复瑟夫数据返回上课时间发货时间看"
>
  <yn-button class="mt30" type="text">right</yn-button>
</yn-tooltip>
```

## bottom

```vue
<yn-tooltip
  trigger="hover"
  placement="bottom"
  content="bottom我是tooltip撒旦发生口角是否数据库恢复瑟夫数据返回上课时间发货时间看"
>
  <yn-button class="mt30" type="text">bottom</yn-button>
</yn-tooltip>
```

## on click

```vue
<yn-tooltip
  @visibleChange="onVisibleChange2"
  content="我是tooltip"
  trigger="click"
>
  <yn-button class="mt30" type="text">click</yn-button>
</yn-tooltip>
```

## focus

```vue
<yn-tooltip
  @visibleChange="onVisibleChange1"
  trigger="focus"
  effect="light"
>
  <yn-button class="mt30" type="text">focus</yn-button>
  <div slot="content">我是内容分发的focus。</div>
</yn-tooltip>
```

## slot 

```vue
<yn-tooltip placement="right" effect="light" trigger="hover">
  <yn-button class="mt30" type="text">hover 插槽</yn-button>
  <div slot="content">
    <p>我是tooltip我是tooltip</p>
    <p>我是tooltip我是tooltip</p>
    <p>我是tooltip我是tooltip</p>
  </div>
</yn-tooltip>
```