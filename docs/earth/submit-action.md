<demo-mobile location="https://ui.dullar.xyz/earth/#/submitAction"></demo-mobile>
## 扫码在手机上查看
<cli-qrcode name="submitAction"></cli-qrcode>
# submit-action

<demo-submitAction></demo-submitAction>
```vue
<template>
  <div>
    <h2>yn-submit-action</h2>
    <div class="box">
      <span v-if="disabled">提交中禁止多次点击</span>
      <span v-else>可以提交</span>
      <yn-submit-action
        :showIcon="false"
        label="已选:"
        submitText="确定"
        :disabled="disabled"
        @submit="handleSubmit"
      >
        <yn-submit-action-value>
          <span class="rewrite">(2人)</span>
        </yn-submit-action-value>
        <yn-submit-action-popup-content>
          <ul>
            <li>liyan</li>
            <li>wangshengzi</li>
            <li>xionglonghui</li>
            <li>keyanqin</li>
          </ul>
        </yn-submit-action-popup-content>
      </yn-submit-action>
    </div>
    <div class="box">
      <h4>固定在底部</h4>
      <yn-submit-action
        fixed
        submitText="确认退票"
        @submit="handleSubmit2"
        label="应退金额参考:"
        value="100"
      >
        <!-- <yn-submit-action-popup-content>
          <ul>
            <li>这里是自定义内容</li>
            <li>这里是自定义内容</li>
          </ul>
        </yn-submit-action-popup-content> -->
      </yn-submit-action>
    </div>
    <div class="box">
      <h4>自定义样式</h4>
      <yn-submit-action
        submitText="确认退票"
        @submit="handleSubmit2"
      >
        <yn-submit-action-text>
          <p class="text">暂时无法获取改签预估费用，您可以<a href="javascript:;">致电客服</a> 咨询改签费。</p>
        </yn-submit-action-text>
      </yn-submit-action>
    </div>
    <div class="box">
      <h4>自定义样式</h4>
      <yn-submit-action
        submitText="确认退票"
        @submit="handleSubmit2"
        value="10"
        label="预估："
        valueDescription="Subject to airline"
      >
      <!-- 具体费用以航司核实为准 Subject to airline -->
        <yn-submit-action-popup-content>
          <ul>
            <li>这里是自定义内容</li>
            <li>这里是自定义内容</li>
          </ul>
        </yn-submit-action-popup-content>
        <!-- <yn-submit-action-text>
          <p class="text">暂时无法获取改签预估费用，您可以<a href="javascript:;">致电客服</a> 咨询改签费。</p>
        </yn-submit-action-text> -->
      </yn-submit-action>
    </div>
    <div class="box">
      <yn-button @click="handlePopup">弹出</yn-button>
      <yn-popup v-model="popup">
        <div class="full-content">
          <yn-submit-action
            fixed
            submitText="确认退票"
            @submit="handleSubmit3"
            label="应退金额参考:"
            value="100"
          >
            <yn-submit-action-popup-content>
              <ul>
                <li>这里是自定义内容</li>
                <li>这里是自定义内容</li>
              </ul>
            </yn-submit-action-popup-content>
          </yn-submit-action>
        </div>
      </yn-popup>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "YnSubmitActionPage",
  data() {
    return {
      disabled: false,
      popup: false
    };
  },
  methods: {
    handleSubmit() {
      this.disabled = true;
      setTimeout(() => {
        this.Toast("提交成功");
        this.disabled = false;
      }, 2000);
    },
    handlePopup() {
      this.popup = !this.popup;
    },
    handleSubmit2() {
      this.Toast("提交成功");
    },
    handleSubmit3() {
      this.handlePopup();
      this.Toast("提交成功");
    }
  }
};
</script>
```