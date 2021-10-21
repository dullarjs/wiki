# 如何写一个组件

::: tip 提示
如果你还不清楚如何写基于class修饰的Vue组件，可以先看一下class修饰[基础用法](./vue-class-component.md)
:::

## BaseComponent
- 首先要引入类的修饰器, 然后继承基类（BaseComponent）创建新的组件类, 以下是创建一个HelloWorld类

```vue
<script lang="ts">
import { Component, BaseComponent } from "@/base";
@Component
export default class HelloWorld extends BaseComponent {
}
</script>
```

## 如何在组件内定义组件方法及属性

```vue
<script lang="ts">
import { Component, BaseComponent } from "@/base";
@Component
export default class HelloWorld extends BaseComponent {
  public name = "张三";
  getName() {
    return this.name;
  }
}
</script>
```

## Props

```vue
<script lang="ts">
import { Component, BaseComponent, Props } from "@/base";
@Component
export default class HelloWorld extends BaseComponent {
  @Prop(Number) age: number
  public name = "张三";
  getName() {
    return this.name;
  }
}
</script>
```

## 如何引入其他组件？

```vue
<script lang="ts">
import { Component, BaseComponent } from "@/base";
import Foo from "@/applications/test/foo";
@Component({
  componets: { Foo }
})
export default class HelloWorld extends BaseComponent {
}
</script>
```

## 如何使用vuex

```vue
<script lang="ts">
import { mapActions, mapState, mapGetters } from "vuex";
import { Component, BaseComponent } from "@/base";
import Foo from "@/applications/test/foo";
@Component({
  componets: { Foo },
  methods: {
    ...mapActions("test", ["increase", "getInfo"])
  },
  computed: {
    ...mapState("test", ["number"]),
    ...mapGetters("test", ["getNumber"])
  }
})
export default class HelloWorld extends BaseComponent {
}
</script>
```

## Mixins

```vue
<script lang="ts">
import { mapActions, mapState, mapGetters } from "vuex";
import { Component, BaseComponent, Mixins } from "@/base";
import Foo from "@/applications/test/foo";
import Amixins from "./mixins/a";
@Component({
  componets: { Foo },
  methods: {
    ...mapActions("test", ["increase", "getInfo"])
  },
  computed: {
    ...mapState("test", ["number"]),
    ...mapGetters("test", ["getNumber"])
  }
})
export default class HelloWorld extends Mixins(BaseComponent, Amixins) {
}
</script>
```

## Watch

```vue
<script lang="ts">
import { mapActions, mapState, mapGetters } from "vuex";
import { Component, BaseComponent, Mixins } from "@/base";
import Foo from "@/applications/test/foo";
import Amixins from "./mixins/a";
@Component({
  componets: { Foo },
  methods: {
    ...mapActions("test", ["increase", "getInfo"])
  },
  computed: {
    ...mapState("test", ["number"]),
    ...mapGetters("test", ["getNumber"])
  }
})
export default class HelloWorld extends Mixins(BaseComponent, Amixins) {
  @Props(Number) age: number
  @Watch("age")
  hanldeWatchAge(newVal: number, oldVal: number): void {}
}
</script>
```
