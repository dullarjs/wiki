<demo-pc width="200%" location="https://ui.dullar.xyz/mercury/#/category"></demo-pc>
# category

```vue
<template>
  <div class="category-content">
    <h2>yn-category</h2>
    <yn-category :delay="80" :categories="category2" :category="getCategory()" @pick="handlePicked"></yn-category>
  </div>
</template>
<script type="text/javascript">
const category = require("./category.json").data;
const category2 = require("./mall.json").data.categoryList;
// console.log("222", category);
export default {
  name: "YnCategoryPage",
  data() {
    return {
      category2
    };
  },
  mounted() {
    console.log(this.processingData(category));
  },
  methods: {
    handlePicked(item) {
      console.log("item = ", item);
    },
    processingData() {
      // 处理数据
      const result = [];
      category.forEach(cat => {
        result.push(...cat.children);
      });
      return result;
    },
    requestCategory(args) {
      console.log(args);
      return new Promise((resolve, reject) => {
        console.log(reject);
        setTimeout(() => {
          resolve(this.processingData(category));
        }, 1000);
      });
    },
    getCategory() {
      return {
        params: { a: 1, b: 2, c: 3 },
        action: this.requestCategory,
        parse: (e) => {
          return e.showName ? e.showName : e.catName;
        }
      }
    }
  }
};
</script>

<style type="text/css" scoped="scoped">
.category-content {
  margin: 20px;
  background: #eee;
  height: 100%;
}
</style>

```

::: details Test data (category.json)
```js
{"status":0,"code":"000000","message":"OK","data":[{"catId":46,"catName":"暖通","catDesc":"一级分类","parentId":0,"grade":1,"touchIcon":null,"children":[{"catId":4600,"catName":"通风设备","catDesc":"二级分类","parentId":46,"grade":2,"touchIcon":null,"children":[]},{"catId":4601,"catName":"防爆通风设备","catDesc":"二级分类","parentId":46,"grade":2,"touchIcon":null,"children":[{"catId":460100,"catName":"防爆通风设备","catDesc":"三级分类","parentId":4601,"grade":3,"touchIcon":null,"children":[]}]},{"catId":4602,"catName":"防爆供热设备","catDesc":"二级分类","parentId":46,"grade":2,"touchIcon":null,"children":[{"catId":460200,"catName":"防爆供热设备","catDesc":"三级分类","parentId":4602,"grade":3,"touchIcon":null,"children":[]}]},{"catId":4603,"catName":"供暖供热设备","catDesc":"二级分类","parentId":46,"grade":2,"touchIcon":null,"children":[{"catId":460300,"catName":"温控仪表","catDesc":"三级分类","parentId":4603,"grade":3,"touchIcon":null,"children":[]},{"catId":460301,"catName":"家用/商用取暖设备","catDesc":"三级分类","parentId":4603,"grade":3,"touchIcon":null,"children":[]},{"catId":460302,"catName":"工业取暖供热设备","catDesc":"三级分类","parentId":4603,"grade":3,"touchIcon":null,"children":[]},{"catId":460303,"catName":"热水器","catDesc":"三级分类","parentId":4603,"grade":3,"touchIcon":null,"children":[]},{"catId":460304,"catName":"其他家用电器","catDesc":"三级分类","parentId":4603,"grade":3,"touchIcon":null,"children":[]}]},{"catId":4604,"catName":"HVAC仪表及楼宇控制","catDesc":"二级分类","parentId":46,"grade":2,"touchIcon":null,"children":[{"catId":460400,"catName":"风速/风量","catDesc":"三级分类","parentId":4604,"grade":3,"touchIcon":null,"children":[]},{"catId":460401,"catName":"温度/湿度","catDesc":"三级分类","parentId":4604,"grade":3,"touchIcon":null,"children":[]},{"catId":460402,"catName":"压力/差压","catDesc":"三级分类","parentId":4604,"grade":3,"touchIcon":null,"children":[]},{"catId":460403,"catName":"流量/液位","catDesc":"三级分类","parentId":4604,"grade":3,"touchIcon":null,"children":[]},{"catId":460404,"catName":"气体温湿度变送器/传感器","catDesc":"三级分类","parentId":4604,"grade":3,"touchIcon":null,"children":[]},{"catId":460405,"catName":"气体浓度变送器/传感器","catDesc":"三级分类","parentId":4604,"grade":3,"touchIcon":null,"children":[]},{"catId":460406,"catName":"HVAC楼宇控制系统","catDesc":"三级分类","parentId":4604,"grade":3,"touchIcon":null,"children":[]}]},{"catId":4605,"catName":"空气净化过滤","catDesc":"二级分类","parentId":46,"grade":2,"touchIcon":null,"children":[{"catId":460500,"catName":"金属框板式空气过滤器","catDesc":"三级分类","parentId":4605,"grade":3,"touchIcon":null,"children":[]},{"catId":460501,"catName":"袋式空气过滤器","catDesc":"三级分类","parentId":4605,"grade":3,"touchIcon":null,"children":[]},{"catId":460502,"catName":"中效/亚高效/高效空气过滤器","catDesc":"三级分类","parentId":4605,"grade":3,"touchIcon":null,"children":[]},{"catId":460503,"catName":"过滤材料","catDesc":"三级分类","parentId":4605,"grade":3,"touchIcon":null,"children":[]},{"catId":460504,"catName":"油/烟净化设备","catDesc":"三级分类","parentId":4605,"grade":3,"touchIcon":null,"children":[]},{"catId":460505,"catName":"纸框板式空气过滤器","catDesc":"三级分类","parentId":4605,"grade":3,"touchIcon":null,"children":[]},{"catId":460506,"catName":"金属网过滤器","catDesc":"三级分类","parentId":4605,"grade":3,"touchIcon":null,"children":[]},{"catId":460507,"catName":"空气净化设备","catDesc":"三级分类","parentId":4605,"grade":3,"touchIcon":null,"children":[]},{"catId":460508,"catName":"风机过滤单元","catDesc":"三级分类","parentId":4605,"grade":3,"touchIcon":null,"children":[]},{"catId":460509,"catName":"净化除味材料","catDesc":"三级分类","parentId":4605,"grade":3,"touchIcon":null,"children":[]}]},{"catId":4606,"catName":"商用及工业燃烧","catDesc":"二级分类","parentId":46,"grade":2,"touchIcon":null,"children":[{"catId":460600,"catName":"锅炉和燃烧器控制器","catDesc":"三级分类","parentId":4606,"grade":3,"touchIcon":null,"children":[]},{"catId":460601,"catName":"执行器","catDesc":"三级分类","parentId":4606,"grade":3,"touchIcon":null,"children":[]},{"catId":460602,"catName":"火焰探测器","catDesc":"三级分类","parentId":4606,"grade":3,"touchIcon":null,"children":[]},{"catId":460603,"catName":"点火装置和点火变压器","catDesc":"三级分类","parentId":4606,"grade":3,"touchIcon":null,"children":[]},{"catId":460604,"catName":"压力开关和限制控制","catDesc":"三级分类","parentId":4606,"grade":3,"touchIcon":null,"children":[]},{"catId":460605,"catName":"燃气控制产品","catDesc":"三级分类","parentId":4606,"grade":3,"touchIcon":null,"children":[]},{"catId":460606,"catName":"燃气阀门","catDesc":"三级分类","parentId":4606,"grade":3,"touchIcon":null,"children":[]},{"catId":460607,"catName":"温度控制器","catDesc":"三级分类","parentId":4606,"grade":3,"touchIcon":null,"children":[]}]},{"catId":4607,"catName":"粉尘/流体过滤","catDesc":"二级分类","parentId":46,"grade":2,"touchIcon":null,"children":[]}]}],"timestamp":1631263303360}
```
:::

::: details Test data (mall.json)
```js
{
    "status": 0,
    "code": "000000",
    "message": "OK",
    "data": {
        "categoryList": [
            {
                "catId": "10,11,17,19",
                "showName": "数码",
                "catName": "数码,电脑、办公,食品饮料,礼品",
                "id": 7
            },
            {
                "catId": "17,54,55,56,57,58,59,60,61,62,63,64,65,66,67",
                "showName": "工业品",
                "catName": "食品饮料,照明,密封,电工,安全,消防,存储,包材,刀具,管阀,磨具,制冷,胶粘,车间化学品,工位",
                "id": 9
            },
            {
                "catId": "11,30",
                "showName": "电脑",
                "catName": "电脑、办公,家庭清洁/纸品",
                "id": 10
            },
            {
                "catId": "19",
                "showName": "礼品",
                "catName": "礼品",
                "id": 11
            },
            {
                "catId": "16",
                "showName": "母婴",
                "catName": "母婴",
                "id": 12
            },
            {
                "catId": "46",
                "showName": "暖通",
                "catName": "暖通",
                "id": 13
            },
            {
                "catId": "28",
                "showName": "鞋靴",
                "catName": "鞋靴",
                "id": 15
            },
            {
                "catId": "12,14",
                "showName": "家用电器美妆护肤",
                "catName": "家用电器,美妆护肤",
                "id": 16
            },
            {
                "catId": "10,27",
                "showName": "电子数码",
                "catName": "数码,手机通讯",
                "id": 19
            },
            {
                "catId": "26,41",
                "showName": "家装建材",
                "catName": "家装建材,工业检测",
                "id": 20
            },
            {
                "catId": "12",
                "showName": "家用电器",
                "catName": "家用电器",
                "id": 8
            },
            {
                "catId": "13,16",
                "showName": "服饰内衣",
                "catName": "服饰内衣,母婴",
                "id": 14
            }
        ]
    },
    "timestamp": 1629286099093
}

```
:::