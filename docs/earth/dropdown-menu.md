<demo-mobile location="https://ui.dullar.xyz/earth/#/dropdownMenu"></demo-mobile>
## 扫码在手机上查看
<cli-qrcode name="dropdownMenu"></cli-qrcode>
# dropdown-menu

<demo-dropdownMenu></demo-dropdownMenu>
```vue
<template>
  <div>
    <div class="box">
      <yn-dropdown-menu>
        <yn-dropdown-menu-item
          v-model="value1"
          :options="option1"
          @change="handleChange"
        ></yn-dropdown-menu-item>
        <yn-dropdown-menu-item
          v-model="value2"
          defaultSelectedIndex="2"
          :options="option2"
          :titleChangealbe="true"
        ></yn-dropdown-menu-item>
        <yn-dropdown-menu-item
          v-model="value3"
          ref="menuItem"
          @beforeEnter="handleBeforeEnter"
        >
          <div>
            <span>这里面是自定义内容</span>
            <yn-button type="primary" @click="close1">关闭</yn-button>
          </div>
        </yn-dropdown-menu-item>
      </yn-dropdown-menu>
    </div>
    <div class="box">
      <yn-dropdown-menu direction="up">
        <yn-dropdown-menu-item
          v-model="value6"
          :options="setOtions()"
          defaultSelectedIndex="2"
        ></yn-dropdown-menu-item>
        <yn-dropdown-menu-item
          v-model="value5"
          :mapStatus="mapStatus"
          :titleChangealbe="true"
          @change="handleChange"
          :fixed="true"
          ref="mapStatus"
        ></yn-dropdown-menu-item>
        <yn-dropdown-menu-item
          v-model="value4"
          ref="closeAble"
          :hideDirectionIcon="true"
        >
          <div>
            <span>这里面是自定义内容</span>
            <yn-button type="primary" @click="close">关闭</yn-button>
          </div>
        </yn-dropdown-menu-item>
      </yn-dropdown-menu>
      <hr />
      <yn-button type="primary" @click="changeData(true)">直接选中</yn-button>
      <yn-button type="primary" @click="changeData(false)">取消选中</yn-button>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "DemoDropdownMenu",
  data() {
    return {
      value1: "我是固定title",
      value6: "异步加载",
      value2: "我的可变title",
      value3: "自定义内容",
      value4: "不显示icon",
      option1: [
        { text: "Option1", value: 0 },
        { text: "Option2", value: 1 },
        { text: "Option3", value: 2 }
      ],
      option2: [
        { text: "Option A", value: "a" },
        { text: "Option B", value: "b" },
        { text: "Option C", value: "c" }
      ],
      option3: [],
      option4: [
        { text: "Option A", value: "a" },
        { text: "Option B", value: "b" },
        { text: "Option C", value: "c" }
      ],
      value5: "默认文案",
      mapStatus: {
        checked: {
          value: 1,
          label: "选中文案"
        },
        unchecked: {
          value: 2,
          label: "未选中文案"
        }
      }
    };
  },
  methods: {
    getOptions() {
      return new Promise((resolve, reject) => {
        console.log(reject);
        setTimeout(() => {
          const options = [
            { text: "Option1", value: 0 },
            { text: "Option2", value: 1 },
            { text: "Option3", value: 2 }
          ];
          resolve(options);
        }, 3000);
      });
    },
    setOtions() {
      return {
        action: this.getOptions,
        params: { a: 1, b: 2 },
        parse: res => {
          return res;
        }
      };
    },
    handleBeforeEnter() {
      this.Toast("即将展开");
    },
    handleChange(option) {
      console.log(option);
      this.Toast(`已选择${option.value}`);
    },
    close() {
      console.log("关闭");
      this.$refs.closeAble.closeTab();
    },
    close1() {
      this.$refs.menuItem.closeTab();
    },
    changeData(e) {
      this.$refs.mapStatus.check(e);
    }
  }
};
</script>
<style type="text/css" scoped>
.box {
  height: 300px;
}
</style>

```