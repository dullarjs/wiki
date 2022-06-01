
## [查看demo](https://ui.dullar.xyz/mars/#/iconfont)
# iconfont
```vue
<yn-iconfont :name="iconphone-number" @click="handleClick"></yn-iconfont>
```
<demo-iconfont></demo-iconfont>



## 注意
::: warning 使用提示
yn-iconfont组件只是封装了img标签的一个基础组件，它内置了一些svg图标（内置图标参考上面案例）。因为内置的图标不会全部满足所有业务场景，所以基于此，组件库本身支持对svg图标的扩展，我们先看这个扩展怎么用

```js
import Vue from "vue";
import svgs from "@/assets/svgs"; 
// 此处svg文件的扩展指向svgs目录的根目录文件夹
// 注意在这个svgs这个目录的根目录下要增加index.ts文件（参考下面的示例）
// 支持对外暴露所有当前目录下所有svg文件的能力
import Mars from "@dullar/mars";
Mars.config({ YnIconfont: { svgs, svgPrefix: "icon" } });
// 此处需要调用组件库Mars的config方法，该方法接收一个object作为入参
// 目前仅支持YnIconfont的配置，此配置接收两个参数，一个是svgs的所有文件
// 第二个参数svgPrefix不是必须的，因为有时候从第三方工具（比如阿里的iconfont.cn）
// 批量导出svg的时候会给svg文件加上一个前缀，例如iconback.svg,iconconfirm.svg
// 那在使用调用的时候我们需要这样<yn-iconfont name="iconconfirm"></yn-iconfont>
// 也即name值问文件名，考虑到每个文件的前缀icon为固定，所以我们可以把svgPrefix设置好
// 那在调用的时候就可以不用带icon前缀了，也即name值这时候就为confirm和back了
// 也即<yn-iconfont name="confirm"></yn-iconfont>
Vue.use(Mars);
```
针对扩展的svg图标需要注意一点，假如说扩展的svg图标文件名跟组件库内置的一致，则扩展的会覆盖组件库默认的，所以如果你不想替换默认的而只是新增一种icon，那需要保证扩展的svg文件名都不一样

```js
// index.ts 对外暴露当前目录下所有svg文件
interface AnyObject {
  [propName: string]: any;
}
const importAll = (context: __WebpackModuleApi.RequireContext) => {
  const map: AnyObject = {};
  for (const key of context.keys()) {
    const keyArr = key.split("/");
    keyArr.shift(); // 移除.
    map[keyArr.join(".").replace(/\.svg$/g, "")] = context(key);
  }
  return map;
};

export default importAll(require.context("./", false, /\.svg$/));

```
:::