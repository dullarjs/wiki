# 写在前面

ts版Vue组件跟js版Vue的书写形式主要的区别就在于，Vue因为天生是不支持跟TS的结合，所以要实现跟TS结合就需要引入“语法糖”，把Vue现有的写组件的方式转换成TS类式，然后再通过“语法糖”转换成Vue可识别的语法。

# 有哪些语法糖库

官方提供了([vue-class-component](https://www.npmjs.com/package/vue-class-component))一套自己的解决方案，但是整套解决方案有些东西处理的跟TS结合看起来不那么尽人意，比如对Props的处理：

按照官方的方式来写的话：
```vue
<template>
  <div>{{ message }}</div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

// Define the props by using Vue's canonical way.
const GreetingProps = Vue.extend({
  props: {
    name: String
  }
})

// Use defined props by extending GreetingProps.
@Component
export default class Greeting extends GreetingProps {
  get message(): string {
    // this.name will be typed
    return 'Hello, ' + this.name
  }
}
</script>
```

声明props需要先通过Vue构造器创建一个“子类”，在“子类”里面声明props，然后在要写的类里面继承，这样类里面就有了所要定义的props了。咋一看起来倒是没啥，但是你想，这样写岂不是TS的类型校验完全无用武之地了？通过Vue构造器这种形式创建的props类型依然是通过Vue自身的校验规则来，并不是TS的校验规则。另一方面来说，在语法上斟酌起来还是有点难受，组件自身的props定义为什么要新声明一个props类，然后再继承它，这样就会感觉props脱离类本身存在一样，给人一种怪怪的感觉。怎么办呢？


所以就有人对官方的库进行了改良（[vue-property-decorator](https://github.com/kaorun343/vue-property-decorator#Prop)），它的处理方式如下：

```vue

<template>
  <div>{{ message }}</div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class Greeting extends Vue {
  @Prop(String) name: string
  get message(): string {
    // this.name will be typed
    return 'Hello, ' + this.name
  }
}
</script>

```

嗯，看起来舒服多了，并且代码也简化了不少。

::: warning
需要注意的是，vue-property-decorator和vue-class-component并不是替代关系，而是依赖关系，正如vue-property-decorator官方描述的一样

"This library fully depends on vue-class-component"

所以在实际使用的时候，我们引入的vue-property-decorator是包含vue-class-component的语法糖语法及API的
:::

