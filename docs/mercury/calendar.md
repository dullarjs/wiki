<demo-pc location="https://ui.dullar.xyz/mercury/#/calendar"></demo-pc>
# calendar

```vue
<template>
  <div>
    <ul>
      <li>
        <div>
          <yn-button @click="handleOpenCalendar('calendar1')">
            单选日历默认，无指定默认日期
          </yn-button>
        </div>
        <span>已选择时间：{{ calendar1Date }}</span>
        <hr />
      </li>
      <li>
        <div>
          <yn-button @click="handleOpenCalendar('calendar2')">
            多选日历默认，无指定默认日期
          </yn-button>
        </div>
        <span>已选择时间：{{ calendar2Date }}</span>
        <hr />
      </li>
      <li>
        <div>
          <yn-button @click="handleOpenCalendar('calendar3')">
            单选日历，指定默认选择为明天({{ defaultDate }})
          </yn-button>
        </div>
        <span>已选择时间：{{ calendar3Date }}</span>
        <hr />
      </li>
      <li>
        <div>
          <yn-button @click="handleOpenCalendar('calendar4')">
            多选日历，指定默认时间，当前时间前四天后五天({{
              defaultStartDate
            }}
            ~ {{ defaultEndDate }})
          </yn-button>
        </div>
        <span>已选择时间：{{ calendar4Date }}</span>
        <hr />
      </li>
      <li>
        <div>
          <yn-button @click="handleOpenCalendar('calendar5')">
            多选日历，带底部确认按钮
          </yn-button>
        </div>
        <span>已选择时间：{{ calendar5Date }}</span>
        <hr />
      </li>
      <li>
        <div>
          <yn-button @click="handleOpenCalendar('calendar6')">
            多选日历，允许选择同一天
          </yn-button>
        </div>
        <span>已选择时间：{{ calendar6Date }}</span>
        <hr />
      </li>
      <li>
        <div>
          <yn-button @click="handleOpenCalendar('calendar7')">
            多选日历，自定义title
          </yn-button>
        </div>
        <span>已选择时间：{{ calendar7Date }}</span>
        <hr />
      </li>
      <li>
        <div>
          <yn-button @click="handleOpenCalendar('calendar8')">
            单选多选切换
          </yn-button>
        </div>
        <yn-radiobox
          v-model="single"
          @change="e => handleChange(e, 'single')"
        ></yn-radiobox
        ><span>单选</span>
        <yn-radiobox
          v-model="double"
          @change="e => handleChange(e, 'double')"
        ></yn-radiobox
        ><span>多选</span>
        <span>已选择时间：{{ calendar8Date }}</span>
        <hr />
      </li>
      <li>
        <div>
          <yn-button @click="handleOpenCalendar('calendar9')"
            >一年前日期到一年后日期</yn-button
          >
        </div>
        <span>已选择时间：{{ calendar9Date }}</span>
        <hr />
      </li>
    </ul>
    <yn-calendar
      mode="single"
      :before="10"
      :after="10"
      v-model="calendar1"
      v-on:getDate="handleOnGetDate1"
      @afterLeave="handleAfterLeave"
    ></yn-calendar>
    <yn-calendar
      mode="double"
      :before="10"
      :after="10"
      v-model="calendar2"
      v-on:getDate="handleOnGetDate2"
    ></yn-calendar>
    <yn-calendar
      mode="single"
      :before="10"
      :after="10"
      v-model="calendar3"
      :defaultDate="defaultDate"
      v-on:getDate="handleOnGetDate3"
    ></yn-calendar>
    <yn-calendar
      mode="double"
      :before="10"
      :after="10"
      v-model="calendar4"
      :defaultStartDate="defaultStartDate"
      :defaultEndDate="defaultEndDate"
      v-on:getDate="handleOnGetDate4"
    ></yn-calendar>
    <yn-calendar
      mode="double"
      :before="10"
      :after="10"
      v-model="calendar5"
      v-on:getDate="handleOnGetDate5"
      :showConfirmButton="true"
    ></yn-calendar>
    <yn-calendar
      mode="double"
      :before="10"
      :after="10"
      v-model="calendar6"
      v-on:getDate="handleOnGetDate6"
      :doubleModeAllowSameDate="true"
    ></yn-calendar>
    <yn-calendar
      mode="double"
      :before="10"
      :after="10"
      v-model="calendar7"
      v-on:getDate="handleOnGetDate7"
      :title="['日历', '请选择入住时间', '请选择离店时间']"
    ></yn-calendar>
    <yn-calendar
      :mode="getModel"
      :before="10"
      :after="10"
      v-model="calendar8"
      v-on:getDate="handleOnGetDate8"
      :title="['日历', '请选择入住时间', '请选择离店时间']"
    ></yn-calendar>
    <yn-calendar
      before="1"
      after="1"
      v-model="calendar9"
      unit="year"
    ></yn-calendar>
  </div>
</template>

<script>
const moment = require("moment");
export default {
  name: "DemoCalendar",
  data() {
    return {
      calendar1: false,
      calendar1Date: "",
      calendar2: false,
      calendar2Date: "",
      calendar3: false,
      calendar3Date: "",
      defaultDate: moment()
        .add(1, "d")
        .format("YYYY-MM-DD"),
      calendar4: false,
      calendar4Date: "",
      defaultStartDate: moment()
        .add(-4, "d")
        .format("YYYY-MM-DD"),
      defaultEndDate: moment()
        .add(5, "d")
        .format("YYYY-MM-DD"),
      calendar5: false,
      calendar5Date: "",
      calendar6: false,
      calendar6Date: "",
      calendar7: false,
      calendar7Date: "",
      calendar8: false,
      single: false,
      double: true,
      calendar8Date: "",
      calendar9Date: "",
      calendar9: false
    };
  },
  computed: {
    getModel() {
      if (this.single) {
        return "single";
      } else if (this.double) {
        return "double";
      }
    }
  },
  methods: {
    handleAfterLeave() {
      this.Toast("关闭完成的回调事件触发");
    },
    handleOpenCalendar(attr) {
      this[attr] = !this[attr];
    },
    handleOnGetDate1(date) {
      console.log(date);
      this.calendar1Date = date.date.date;
    },
    handleOnGetDate2(date) {
      this.calendar2Date = date.fromDate.date + " ~ " + date.toDate.date;
      console.log(date);
    },
    handleOnGetDate3(date) {
      console.log(date);
      this.calendar3Date = date.date;
    },
    handleOnGetDate4(date) {
      this.calendar4Date = date.fromDate.date + " ~ " + date.toDate.date;
      console.log(date);
    },
    handleOnGetDate5(date) {
      this.calendar5Date = date.fromDate.date + " ~ " + date.toDate.date;
      console.log(date);
    },
    handleOnGetDate6(date) {
      this.calendar6Date = date.fromDate.date + " ~ " + date.toDate.date;
      console.log(date);
    },
    handleOnGetDate7(date) {
      this.calendar7Date = date.fromDate.date + " ~ " + date.toDate.date;
      console.log(date);
    },
    handleOnGetDate8(date) {
      this.calendar8Date = date.fromDate.date + " ~ " + date.toDate.date;
      console.log(date);
    },
    handleOnGetDate9(date) {
      this.calendar9Date = date.fromDate.date + " ~ " + date.toDate.date;
      console.log(date);
    },
    handleChange(e, args) {
      if (args === "single") {
        if (e) {
          this.double = false;
        } else {
          this.single = true;
        }
      } else if (args === "double") {
        if (e) {
          this.single = false;
        } else {
          this.double = true;
        }
      }
    }
  }
};
</script>
<style type="text/css" scoped="scoped">
hr {
  border: 0.5px solid #e4e4e4;
}
ul {
  padding: 0;
  margin: 0;
  text-align: center;
  list-style: none;
}
ul li {
  margin: 20px auto;
}
</style>

```