# 如何配置路由

## 配置路由相当简单，看下面案例

```js
// 首先需要引入路由管理类
import { default as RouterManager } from "@/core/RouterManager";
// 实例化类，此类实例化接受两个参数，第一个参数代表路由级组件所在的目录
//【根据规定，统一放到应用的文件夹下命名为layout】。第二个参数代表命名空间
// 换句话说，如果有了命名空间，在访问具体路由的时候需要加上命名空间 
// 例如： localhost:8080/#/test/about  其中test即为命名空间，此举防止多人协作路由冲突
const router = new RouterManager("test/layout", "test");
router.register([
  {
    pathName: "about",
    path: "/about",
    name: "about"
  },
  {
    pathName: "home",
    path: "/home",
    name: "home"
  }
]);
export default router.getRoutes();
```
- 需要引入路由管理类，并且实例化类
- 实例化创建类的参数为指定当前应用页面级组件所在的目录（此处是test应用layout目录）
- 调用register方法，参数为数组类型，每一个数组元素跟vue-router里面所规范的没有太大区别，但是有一点点小的改动，比如按照vue-router的方式，需要在每个路由上绑定component属性，例如，{ component: import("./layout/test") }，现在由pathName指定路由组件位置，程序会自动引入路由组件并注册

::: warning 注意

数组每个元素都有一个pathName属性，此属性代表需要加载页面组件所在的目录文件夹名称，这个必填。在配置路由的时候不需要手动引入页面组件，页面组件会根据配置的pathName自动加载，所以需要保证pathName为正确的地址。

:::

## 有人可能会有疑问，那我怎么注册404页面呢

```js
router.register([
  {
    pathName: "404",
    path: "*",
    name: "notFound"
  }
]);
```

- RouterManager内部做了特殊处理，如果是通配符 * 则注册为一级路由，此时命名空间不再限制

## 路由守卫

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
import { Route, NavigationGuardNext } from "vue-router";
import LoginStore from "@/applications/login/lib/LocalStore";
const Store = new LoginStore("session", "20210909");

Mercury.config({ YnIconfont: { svgs, svgPrefix: "icon" } });
Vue.config.productionTip = false;
Vue.use(Mercury);

const p = new Platform({ id: "#app", App });
p.registerRouterHooks(
  "beforeEach",
  (from: Route, to: Route, next: NavigationGuardNext) => {
    const token = Store.get("headerToken");

    if (
      Object.keys(token).length == 0 &&
      from.name != "login" &&
      from.name != "ecslogin"
    ) {
      const redirect = btoa(encodeURIComponent(to.path));
      next({ path: `/login?redirect=${redirect}` });
    } else {
      console.log(to);
      next({});
    }
  }
);
p.install("admin");
p.install("goods");
p.install("permission");
p.install("platform"); //平台
p.install("login"); //平台
p.install("ecslogin");
p.install(customApps);
p.startUp();
```
