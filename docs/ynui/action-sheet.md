<demo-mobile location="https://ui.dullar.xyz/earth/#/actionSheet"></demo-mobile>
# action-sheet

## 基础用法
```vue
<template>
  <yn-action-sheet
    v-model="basic"
    :actions="basicActions"
    v-on:getSelected="getSelect"
  ></yn-action-sheet>
</template>
<script>
export default {
  data() {
    return {
      basic: false,
      basicActions: [
        { name: "option1", className: "", disable: false, key: "1" },
        { name: "option2", className: "", disable: false, key: "2" },
        { name: "option3", className: "", disable: true, key: "5" },
        { name: "option4", className: "", disable: false, key: "11" },
        { name: "option5", className: "", disable: true, key: "12" }
      ]
    }
  },
  methods: {
    getSelect(e) {
      console.log(e.name);
      this.Toast(e.name);
    }
  }
}
</script>
```

## 带取消 & 禁止某些选线
```vue
<template>
  <yn-action-sheet
    v-model="cancel"
    :actions="cancelActions"
    v-on:getSelected="getSelect"
    showCancel
  ></yn-action-sheet>
</template>
<script>
export default {
  data() {
    return {
      cancel: false,
      cancelActions: [
        { name: "option1", className: "", disable: true, key: "1" },
        { name: "option2", className: "", disable: false, key: "2" },
        { name: "option3", className: "", disable: false, key: "5" },
        { name: "option4", className: "", disable: true, key: "11" },
        { name: "option5", className: "", disable: false, key: "12" }
      ],
    }
  },
  methods: {
    getSelect(e) {
      console.log(e.name);
      this.Toast(e.name);
    }
  }
}
</script>
```

## 异步加载
```vue
<template>
  <yn-action-sheet
    v-model="async"
    :loading="loading"
    @beforeEnter="handleBeforeEnter"
    :actions="asyncActions"
    v-on:getSelected="getSelect"
    showCancel
  ></yn-action-sheet>
</template>
<script>
export default {
  data() {
    return {
      async: false,
      loading: false,
      asyncActions: [],
    }
  },
  methods: {
    getSelect(e) {
      console.log(e.name);
      this.Toast(e.name);
    },
    handleBeforeEnter() {
      if (this.asyncActions.length > 0) {
        return false;
      }
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.asyncActions = [
          { name: "option1", className: "", disable: true, key: "1" },
          { name: "option2", className: "", disable: false, key: "2" },
          { name: "option3", className: "", disable: false, key: "5" },
          { name: "option4", className: "", disable: true, key: "11" },
          { name: "option5", className: "", disable: false, key: "12" }
        ];
      }, 3000);
    }
  }
}
</script>
```

