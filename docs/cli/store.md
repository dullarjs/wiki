# 如何开发store 


### 第一步需要先定义好对外暴露的store文件
在每个应用的根目录下都有一个store文件夹。在store文件夹下有一个index.ts文件，这个文件是暴露当前应用的store对象。

下面是index.ts的标准格式
```js
export const API = {
  getInfo: "/api"
};
import importAll from "@/core/utils/importAll";
export default importAll(require.context("./", false, /\.ts$/), [
  "./index.ts"
]).toArray();
```

::: tip 说明
 
API对象是当前应用所依赖的接口，格式为 key: value形式

importAll方法使用很固定，有连个参数，第一个参数固定不动（当然如果你知道怎么改也可以修改，但一般不建议改）；第二个参数是数组类型，表示在当前文件夹内【require.context("./", false, /\.ts$/)】不引入数组内指定的文件【此处是index.ts 因为index.ts是对外暴露文件，里面内容也即上面案例内容，不是单纯的store文件】

:::

### 教你如何写Vuex部分

![An image](./images/vuex.png)

> 从上图可以看出，首先用户通过事件触发action，这时候会有两种情况，一种是异步请求需要去向后台发起http拿数据，另一种是直接数据是现成的直接通过action方法传过来。但是不管action的数据从哪里来，下一步到mutation的处理都是一致的，mutation的本质实际上就是一个纯数据处理函数，mutation里面适合做数据计算，计算完以后在把数据挂载到state上，然后view更新。这个是一个完整组件跟vuex的交互的数据流。

因为本架构是把action mutation getters等抽象成了一个聚合类，在写的时候跟官网的案例有点区别：

先贴一个案例感受一下
```js
// 这个是同步的数据流转情况
import StoreManager from "@/core/StoreManager";
const store = new StoreManager("test");
store
  .register({ state: { number: 0 } })
  .action("increase")
  .getters("getNumber", result => {
    console.log("getters getNumber", result);
    const { state } = result;
    return 10 * state.number;
  })
  .mutation(res => {
    const { payload, state } = res;
    if (payload.type === "add") {
      state.number = state.number + 1;
    } else if (payload.type === "mins") {
      state.number = state.number - 1;
    }
    console.log(res);
  });
export default store;
```

- 首先要引入store类来创建一个实例，注意实例化的时候参数传的值为当前应用的名称，这个非常关键，因为我们开发模式是基于插件化开发，每个插件是一个独立完整并且可运行的应用，每个独立的应用安装在平台上就成了一个聚合的超大应用。所以为了保证每个应用的状态不会交叉，命名空间就会以应用名区分。

- 接下来就相当简单了，支持调用一系列方法【register, action, mutation, getters】，支持链式操作。下面讲一下具体每个方法都有哪些注意事项：

  - register 方法是初始化state并赋值【此方法非必须】
  - action action的参数有三个，第一个为事件的名称，对应的是store文件夹下事件文件。第二个参数代表是否为异步请求接口，默认是false。第三个参数只有在第二个参数为true的情况下才有意义，代表异步请求的方式，get,post,postJSON，upload目前支持这四种方式。【此方法必须】，需要注意的是第四个方法适合<Badge text="表单上传文件时候使用" />
  - mutation ，参数只有一个回调函数，回调函数({ state, payload }) => any; 其中state为当前应用下状态对象。payload里面信息包含接口请求回来的数据，res，以及用户请求的参数params等。【此方法非必须】
  ::: tip 说明
  如果action已经确定为异步请求接口，而mutation又没有的情况下，择异步请求的接口数据不会经过上图所示数据流流转。取而代之的是仅仅发送ajax请求，数据需要在调用的地方做接收处理。
  :::
  - getters方法也相对比较简单，该方法有两个参数，第一个是getterName,第二个为回调函数，({ state, getters, rootState, rootGetters }) => any;【此方法非必须】


下面列出的是异步请求的案例
```js
// src/applications/test/store/getInfo.ts
import StoreManager from "@/core/StoreManager";
const store = new StoreManager("test");
store
  .register({ state: {} })
  .action("getInfo", true)
  .mutation(res => {
    const { payload, state } = res;
    console.log(payload, state);
  });
export default store;
```

### 一般情况下我们不直接引入core/StoreManager类进行实例化，而是通过一个中间类来继承

```js
// src/Store.ts

import { AnyObject } from "./core/types";
import StoreManager from "@/core/StoreManager";
class Store extends StoreManager {
  constructor(moduleName: string, config?: AnyObject) {
    super(moduleName, config);
  }
  protected httpSuccessCallback(args: AnyObject | string): void {
    // console.log("继承后的http success callback", args);
  }
  protected httpFailCallback(args: any): void {
    console.log("继承后的http fail callback", args);
    YnToast({ message: "服务器异常", position: "middle" });
    Promise.reject(args);
    return args;
  }
  protected httpParamsModifier(args: AnyObject): AnyObject {
    return args;
  }
  protected setRequestHeaders(uri: string, params: AnyObject): AnyObject {
    return {
      headers: {
        userId: "3257",
        userCode: "YN20200060",
        compId: "2a55af39-60d4-c0b9-bf27-08d89cc0d622",
        ecsUserId: "11ebdaff992f472e93c47df16a3153d8",
      }
    };
  }
}
export default Store;

```

```js
// src/applications/test/store/getInfo.ts

import Store from "@/Store";
const store = new Store("test");
store
  .register({ state: {} })
  .action("getInfo", true)
  .mutation(res => {
    const { payload, state } = res;
    console.log(payload, state);
  });
export default store;
```

好奇的你可能会问，这么写有什么好处呢？

主要是防止业务逻辑到core/*文件夹下去修改，也就是说保护底层代码不受业务逻辑污染

那你还可能会问，这个文件到底有哪些情况我会用到而需要去改呢？

就像上面的案例一样，在继承StoreManager类的时候，有个方法重写了，setRequestHeaders，那这个方法是干啥的呢？有些时候我们发送Ajax请求需要在请求头信息增加一些认证参数，确保每次请求的合法性，那这个方法就是设置请求头信息的参数的。如上案例，当你重写setRequestHeaders方法并给定请求头信息字段的时候，在后续每次发送的http请求都会携带这些头信息。

::: warning
这里需要注意，假如你请求的服务存在不同的认证情况，例如 在请求/user/*这类接口的时候需要在请求头信息增加a,b两个字段，而在请求/address/*这类的接口的时候需要在请求头信息增加c,d两个字段，那怎么办呢？细心的你可能注意到，setRequestHeaders方法有两个参数，第一个参数uri也即你发送Ajax请求的服务地址，第二个参数则为当前请求所传的参数，一般情况下我们用不到第二个参数。这时候你可以根据uri的值来判断最终需要设置什么请求头，也即：

```js
protected setRequestHeaders(uri: string, params: AnyObject): AnyObject {
  if (uri.startsWith("/user")) {
    return {
      a,
      b
    }
  }
  if (uri.startsWith("/address")) {
    return {
      c,
      d
    }
  }
}
```
:::

### 如何处理下载Excel等文件流

StoreManager里面内置了axios方法，我们使用axios作为http发送的方法。而axios是封装在core文件下的，为了保证代码的健壮性及未来维护方便我们是不允许修改core下面的任何东西。所以假如你有需求要去设置axios怎么办？就像上面案例给的headers的案例一样，我要去修改请求头信息，我们有方法处理（setRequestHeaders），那如果我要修改其他字段，例如responseType等，该如何修改？

拿下载为例，目前我们提供的Ajax方法仅仅有4种类型【get, post, postJSON, upload】，但是默认axios内置的responseType是json，而下载文件需要把responseType设置为blob，怎么做呢？

```js
import Store from "@/Store";
const store = new Store("platform", { responseType: "blob" });
store
  .register({ state: {} })
  .action("BridgeCardTemplate", true, "get")
  .mutation(result => {
    const { payload, state } = result;
    const { res, resolve, reject } = payload;
    resolve(res);
  });
export default store;
```

上面的代码我们已经很熟悉了，实例化一个Store对象，然后在第二个参数里面可以在实例化这个Store的时候把responseType改成需要的值。实际上第二个参数就是axios实例化的时候传的配置参数【config】
```js
axios.create([config])
```
[具体可以查看axios的文档](https://github.com/axios/axios)



