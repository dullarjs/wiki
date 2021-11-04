:::warning
[所有的案例都可以在这里找到源码](https://github.com/justbefree-org/vue2-ts)

[也可以查看编译后运行的案例](https://template-v2.dullar.xyz)
:::
# 项目上如何二开

## 二开设计原理

由于前端代码不像后台可以真正实现类似类的继承、方法的重写等关键核心技术，所以在设计二开之初想法就很简单，“替换”。举个例子：现在假如标准产品里面有个组件HelloWorld，为了简单假设HelloWorld里面就输出hello world字符串，但是对于本地化部署的项目，客户要求我不希望渲染出来的页面是“hello world”，我要改成“hello universe”，按照之前的思维，我只需要在标准产品的代码里面把字符串改一下就能满足客户的需求了。但是你想，我们一个应用设计的那么复杂，岂止一个HelloWorld组件那么简单，单纯的改一个两个文件还好，如果本地定制化需求多了怎么办？以及后续如何把标准产品升级的部分给客户升级？这些都是直接在标准产品里面去做不合适的地方。怎么办呢？还是以HelloWorld的例子来说：


细心地你可能发现，我们目录结构有两个关键的目录，也即
```
src/applications
src/custom
```

顾名思义，applications下面放的是我们标准产品的应用，而custom对应的是产品二开的部分。

对于上面HelloWorld的例子：
```
src/applications/test
        ------|hello-world
                  -------|helloWorld.vue
                  -------|index.ts

src/custom/test
        ------|hello-world
                  -------|helloWorld.vue
                  -------|index.ts
```
其中要求custom的目录结构跟applications保持一致，也就是说只要是同样的目录结构，程序会自动加载custom下与applications下的同目录的组件，然后做一个替换


## 具体改怎么写

::: warning
在写之前我们先做一个约定，我们认为在一个应用里面分两种组件

①路由级别的组件（也就是放到layout目录下通过路由注册的组件）

②业务组件（在应用跟目录下的，通常需要在路由级别组件内引入使用的）

另外我们还需要约定，src/applications为我们标准产品应用的目录；src/custom为二开定制化产品的目录
:::

有了上面我们对组件的分类，结合我们实际的场景，二开无非有三种情况：

 - 标准产品应用内某个业务组件需要二开
 - 标准产品应用内某个路由级组件需要二开
 - 除了标准产品提供的，还有额外新增的路由组件

 上面三种情况有可能会是多种因素叠加，但是从技术上来说只需要考虑三种情况。

 ①对于第一种情况，其实就是上面HelloWorld的案例，只要你在custom的目录下有跟applications保持一致的目录，那在运行项目或打包项目的时候，程序就会自动加载custom目录下的组件替换applications目录下的组件，这种是单纯的针对业务组件二开。这里有一点需要注意的是，两个应用的组件对外暴露的文件，也即index.ts有一点点区别

 ```js
// src/applications/test/hello-world/index.ts
import { loadComponent } from "@/core/utils/load";
export default loadComponent("test/hello-world");
 ```
除此之外还需要在index.ts的同级别目录下建一个default.ts文件

```js
// src/applications/test/hello-world/default.ts
export defalut () => import(/* webpackChunkName: "hello-world" */ "./helloWorld.vue");
```

 ```js
// src/custom/test/hello-world/index.ts
export default () =>
  import(/* webpackChunkName: "overwriteParent" */ "./helloWorld.vue");
 ```
 区别点在于，applications【标准产品目录】下的业务组件在对外暴露的时候需在index.ts内调用 src/core/utils/load.ts下的loadComponent方法。而custom【二开定制化产品目录】下的业务组件在对外暴露的时候只需要通过import。

②对于第二种情况，就相对简单很多了，两边的组件定义是一样的，对外暴露的index.ts文件也没有什么差异

③ 第三种情况也就更简单了，首先custom跟applications这两个目录级别都是相同的，里面放的都是应用，如果是要在标准产品之外增加额外的路由，那就需要在custom下建立所需的应用目录，在应用下建立layout以及layout下面的路由组件，或者是在custom应用目录下建业务组件，需要注意的是，建完新的应用后:

需要在src/custom/index.ts

```js
// const customApps = [] as Array<string>;
// 二开新增一个flight应用
const customApps = ["flight"];
export { customApps };
```

src/main.ts
```js
import "./hooks";
import { logInfo } from "@/config";
logInfo();
import { default as Platform } from "@/core/Platform";
import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import { customApps } from "@/custom";
import Mercury from "@dullar/mercury";
import svgs from "@/assets/iconfont/svgs";
import LoginStore from "@/applications/login/lib/LocalStore";
const Store = new LoginStore("session", "20210909");

Mercury.config({ YnIconfont: { svgs, svgPrefix: "icon" } });
Vue.config.productionTip = false;
Vue.use(Mercury);

const p = new Platform({ id: "#app", App });
p.install("admin");
p.install("goods");
p.install("permission");
p.install("platform"); //平台
p.install("login"); //平台
p.install("ecslogin");
p.install(customApps);
p.startUp();
```
在第25行代码的地方我们引入了二开部分的应用

## 一定要切记
<br/>
<br/>

<Badge text="约定大于习惯！" type="error"/>
<Badge text="约定大于习惯！" type="error"/>
<Badge text="约定大于习惯！" type="error"/>