# AMap

[![npm version](https://badge.fury.io/js/vue-amap2.x.svg)](https://badge.fury.io/js/vue-amap2.x)

# vue-amap2.x

[查看案例](https://lizhuang.xyz/vue-amp2.x/#/)

## Installation

```js
npm install vue-amap2.x --save
```

## Usage

```vue
<VueAmap2x :mapOptions="mapOptions" :plugins="plugins" v-on:pluginInstalled="handleGeolocation" mapKey="ccd1e3a84dd69c646c53abd884db7141" v-on:moveend="handleMoveEnd" v-on:complete="handleMapLoaded" :center="center" v-on:zoomend="handleZoomEnd"></VueAmap2x>
```

### mapKey 对应高德开发者中心申请的key

[申请key](https://lbs.amap.com/api/jsapi-v2/guide/abc/prepare)



### mapOptions 实例化地图对象构造函数参数

```js
mapOptions = {
  mapStyle: "amap://styles/light",
  center: [],
  zoom: [],
  ...
}
```

### plugins 插件

[参考高德地图官方插件文档](https://lbs.amap.com/api/jsapi-v2/guide/abc/plugins#plugins)

```
注意，plugins是数组类型，此方式是采用异步加载插件，加载完插件后可以监听插件安装完回调事件，v-on:pluginInstalled.
```

### event hooks 钩子回调函数

  - zoomstart
  - zoomchange
  - zoomend
  - movestart
  - mapmove
  - moveend
  - dragstart
  - dragging
  - dragend
  - complete

```
以上钩子函数可通过v-on监听
```

### center 地图实例化的时候初始化中心点坐标

### width 实例化地图设置宽度，字符串类型

### height 实例化地图设置的高度，字符串类型