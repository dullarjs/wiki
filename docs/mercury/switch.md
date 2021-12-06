<demo-mobile location="https://ui.dullar.xyz/mercury/#/switch"></demo-mobile>
# yn-switch

```vue
<template>
    <div>
        <h2>yn-switch</h2>
        <h3>基本用法</h3>
        <div>
            <yn-switch v-model="value" width="45"></yn-switch>
        </div>
        <h3>拓展value</h3>
        <div>
            <yn-switch v-model="value1" active-color="#13ce66" inactive-color="#ff4949" active-value="100" inactive-value="0"></yn-switch>
        </div>
        <h3>禁用</h3>
        <div>
            <yn-switch v-model="value" :disabled="true" ></yn-switch>
        </div>
    </div>
</template>
<script type="text/javascript">
export default {
    name: "YnSwitchPage",
    data() {
        return {
            value: true,
            value1: '100'
        }
    },
};
</script>
```