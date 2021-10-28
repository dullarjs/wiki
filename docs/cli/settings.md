:::warning
[所有的案例都可以在这里找到源码](https://github.com/justbefree-org/vue2-ts)

[也可以查看编译后运行的案例](https://template-v2.dullar.xyz)
:::
# 环境变量配置

环境变量，顾名思义，就是针对不同的环境可以配置不同的信息，环境变量的配置文件在 src/config这个文件夹下。

```js
// src/config/dev.ts 
// src/config/test.ts
// src/config/release.ts
```

  - dev.ts对应功能测试环境的配置文件【一般没有功能测试环境的可以不用】
  - test.ts对应集成测试环境的配置文件
  - release.ts对应生产环境的配置文件

配置文件内容如下，
```js
module.exports = {
  version: "The current version is dev20200820180843 from tag branch, published by Just be free",
  interceptAddress: require("./interceptAddress")
};

```
其中version 和interceptAddress是默认的，这两个不能删除；其中version字段所对应的值是在执行
```js
npm run tag:[dev|test|release]
```
的时候所生成，在进行打包的时候需要执行 npm run build:[环境变量]，环境变量分别对应dev,test,prod分别对应三个环境的配置文件。在通过build打包的时候环境变量里面的数据会被注入到打包后的代码内。

:::warning
一般情况下，前端代码打包后是不区分环境的，也就是说打包后放到集成环境也可以放到生产环境也可以，但是需要注意，假如说你测试环境和生产环境配置的信息不一样，那打包后的包也不能随意发布任意环境，也就是说你通过build:test打的包必须放到测试环境，而build:prod打的包必须放到生产，而不能放到其他环境
:::

## 如何使用

```js
// 首先要在使用配置文件的地方引入获取配置的方法
import { getConfig } from "@/config";

// 通过调用getConfig方法，此方法需要接受一个参数key，这个key就是你在配置文件定义的配置信息
getConig(key)
// 这样就可以获取配置文件里面，属性为key所对应的值
```