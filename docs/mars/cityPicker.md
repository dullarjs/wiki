## [查看demo](https://ui.dullar.xyz/mars/#/cityPicker)
# cityPicker

```vue
<template>
  <div>
    <h2>Yn-city-picker</h2>
    <ul>
      <li @click="handlePicker(1)">
        国内城市
        <Yn-city-picker
          :defalutCityName="defalutCityName1"
          :searchable="false"
          @pick="handlePick"
          v-model="picker1"
          :tabs="tabs1"
          :alphaBeta="getAlphaBeta()"
          :history="getHistory()"
          :hotCity="getHotCity()"
          showHistory
        ></Yn-city-picker>
      </li>
      <li @click="handlePicker(2)">
        国际城市
        <Yn-city-picker
          :defalutCityName="defalutCityName2"
          :alphaBeta="getAlphaBeta()"
          :history="getHistory()"
          :hotCity="getHotCity()"
          showHistory
          :searchable="false"
          @pick="handlePick"
          v-model="picker2"
          :tabs="tabs2"
        ></Yn-city-picker>
      </li>
      <li @click="handlePicker(3)">
        全部城市
        <Yn-city-picker
          :defalutCityName="defalutCityName3"
          :alphaBeta="getAlphaBeta()"
          :history="getHistory()"
          :hotCity="getHotCity()"
          :searchable="false"
          @pick="handlePick"
          v-model="picker3"
        ></Yn-city-picker>
      </li>
      <li @click="handlePicker(4)">
        受限城市
        <Yn-city-picker
          :defalutCityName="defalutCityName4"
          :searchable="false"
          @pick="handlePick"
          v-model="picker4"
          :limitedData="data.cnCitiesList"
          limited
        ></Yn-city-picker>
      </li>
      <li @click="handlePicker(9)">
        受限城市搜索
        <Yn-city-picker
          :defalutCityName="defalutCityName9"
          @pick="handlePick"
          v-model="picker9"
          :limitedData="data.cnCitiesList"
          :search="getSearch()"
          limited
        ></Yn-city-picker>
      </li>
      <li @click="handlePicker(5)">
        显示历史记录
        <Yn-city-picker
          :defalutCityName="defalutCityName5"
          @pick="handlePick"
          v-model="picker5"
          :hotCity="getHotCity()"
          showHistory
          :history="getHistory()"
          :alphaBeta="getAlphaBeta()"
        ></Yn-city-picker>
      </li>
      <li @click="handlePicker(6)">
        不显示热门城市
        <Yn-city-picker
          :defalutCityName="defalutCityName6"
          :alphaBeta="getAlphaBeta()"
          :searchable="false"
          @pick="handlePick"
          v-model="picker6"
          :tabs="tabs2"
          :showHotCity="false"
        ></Yn-city-picker>
      </li>
      <li @click="handlePicker(7)">
        可搜索【关闭后会自动清除上次搜索记录】
        <Yn-city-picker
          :defalutCityName="defalutCityName7"
          ref="cityPicker"
          :search="getSearch()"
          :alphaBeta="getAlphaBeta()"
          :history="getHistory()"
          :hotCity="getHotCity()"
          showHistory
          @pick="handlePick"
          v-model="picker7"
          :parse="parse"
          @afterLeave="handleAfterLeave"
        ></Yn-city-picker>
      </li>
      <li @click="handlePicker(8)">
        可搜索(三列布局)
        <Yn-city-picker
          :defalutCityName="defalutCityName8"
          :search="getSearch()"
          :alphaBeta="getAlphaBeta()"
          :history="getHistory()"
          :hotCity="getHotCity()"
          showHistory
          @pick="handlePick"
          v-model="picker8"
          column="3"
        ></Yn-city-picker>
      </li>
    </ul>
    
    <!-- <Yn-city-picker
      :search="getSearch()"
      :alphaBeta="getAlphaBeta()"
      :history="getHistory()"
      :hotCity="getHotCity()"
      showHistory
      @pick="handlePick"
      v-model="picker10"
      :parse="parse"
    ></Yn-city-picker> -->
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import "./style/index.scss";
import { Component } from "vue-property-decorator";
import { AnyObject } from "../../src/types";
const data = require("./ykb_hot_city.json").result;
const alphaBetData = require("./ykb_alphabat_city.json").result;
@Component({
  name: "cityPickerPage"
})
export default class CityPickerPage extends Vue {
  currentNum = 1;
  keywords = "天津";
  alphaBetData: AnyObject = alphaBetData;
  data: AnyObject = data;
  defalutCityName1 = "";
  defalutCityName2 = "";
  defalutCityName3 = "";
  defalutCityName4 = "";
  defalutCityName5 = "";
  defalutCityName6 = "";
  defalutCityName7 = "";
  defalutCityName8 = "";
  defalutCityName9 = "";
  defalutCityName10 = "";
  picker1 = false;
  picker2 = false;
  picker3 = false;
  picker4 = false;
  picker5 = false;
  picker6 = false;
  picker7 = false;
  picker8 = false;
  picker9 = false;
  picker10 = false;
  tabs1: AnyObject[] = [{ label: "国内城市", key: "mainland-china" }];
  tabs2: AnyObject[] = [{ label: "国际/港澳台", key: "overseas" }];

  handleAfterLeave() {
    (this.$refs.cityPicker as AnyObject).clearSearchKeywords();
  }
  parse(city: AnyObject, nameSpace: string) {
    if (nameSpace === "search-result") {
      const str = `<span>
                      <span class="hightlight-city">城市</span>
                      <span class="city-province">${city.CityName}-${city.CountryName}</span>
                      <span class="distance">无机场</span>
                  </span>`;
      const innerHTML = `${str.replace(
            new RegExp(this.keywords, "ig"),
            `<i>${this.keywords}</i>`
          )}`;
      return innerHTML;
    } else {
      const str = `<span>${nameSpace} ${city.CityName}</span>`;
      return str;
    }
  }
  getHistory() {
    return {
      title: "历史查询",
      params: { a: "1", b: "2" },
      action: this.getHistoryAction,
      parse: (e: AnyObject, params: AnyObject = {}) => {
        const { tab } = params;
        if (tab === "mainland-china") {
          return e.cnCitiesList;
        } else if (tab === "overseas") {
          return e.intCitiesList;
        }
      }
    };
  }
  getHistoryAction(params = {}) {
    console.log("这里处理请求的参数", params);
    return new Promise((resolve, reject) => {
      console.log(reject);
      // setTimeout(() => {
      //   reject("失败信息");
      // }, 1000);
      setTimeout(() => {
        resolve(data);
      }, 1000);
    }).catch(err => {
      // this.Toast(err);
      console.log(err, "异常在组件外面处理");
    });
  }
  handlePick(e: AnyObject) {
    // this.Toast(`已选择：${e.CityName}`);
    console.log("已选择：", e.CityName);
    (this as AnyObject)[`defalutCityName${this.currentNum}`] = e.CityName;
  }
  handlePicker(num: number) {
    this.currentNum = num;
    (this as AnyObject)[`picker${num}`] = !(this as AnyObject)[`picker${num}`];
  }
  transferAlphabetData(params: AnyObject, data: AnyObject) {
    const { alphaBeta } = params;
    const alphaBetaSome = alphaBeta.split("");
    const transferedData: AnyObject = {};
    alphaBetaSome.map((key: string) => {
      transferedData[key] = data[key];
    });
    return transferedData;
  }
  getCityListByAlphaBeta(params: AnyObject = {}) {
    console.log("这里处理请求的参数", params);
    
    return new Promise((resolve, reject) => {
      console.log(reject);
      // setTimeout(() => {
      //   reject("失败信息");
      // }, 1000);

      setTimeout(() => {
        resolve(this.transferAlphabetData(params, alphaBetData));
      }, 1000);
    }).catch(err => {
      // this.Toast(err);
      console.log(err, "异常在组件外面处理");
    });
  }
  getHotCityAction(params = {}) {
    console.log("这里处理请求的参数", params);
    return new Promise((resolve, reject) => {
      // setTimeout(() => {
      //   reject("失败信息");
      // }, 1000);
      console.log(reject);
      setTimeout(() => {
        resolve(data);
      }, 1000);
    }).catch(err => {
      // this.Toast(err);
      console.log(err, "异常在组件外面处理");
    });
  }
  getSearchAction(params: AnyObject = {}) {
    console.log("这里处理请求的参数", params);
    const { value } = params;
    this.keywords = value;
    return new Promise((resolve, reject) => {
      console.log(reject);
      // setTimeout(() => {
      //   reject("失败信息");
      // }, 1000);
      setTimeout(() => {
        resolve(data);
      }, 1000);
    }).catch(err => {
      // this.Toast(err);
      console.log(err, "异常在组件外面处理");
    });
  }
  getSearch() {
    return {
      params: { a: "1", b: "2" },
      action: this.getSearchAction,
      parse: (e: AnyObject, params: AnyObject = {}) => {
        const { tab } = params;
        if (tab === "mainland-china") {
          return e.cnCitiesList;
        } else if (tab === "overseas") {
          return e.intCitiesList;
        }
      }
    };
  }
  getHotCity() {
    return {
      title: "热门城市",
      params: { a: "1", b: "2" },
      action: this.getHotCityAction,
      parse: (e: AnyObject, params: AnyObject = {}) => {
        const { tab } = params;
        if (tab === "mainland-china") {
          return e.cnCitiesList;
        } else if (tab === "overseas") {
          return e.intCitiesList;
        }
      }
    };
  }
  getAlphaBeta() {
    return {
      title: "按字母查询",
      params: { a: "1", b: "2" },
      action: this.getCityListByAlphaBeta,
      parse: (e: AnyObject) => {
        return e;
      }
    };
  }
}
</script>

```

::: details Test data (hot_city.json)
```js
{
    "result": {
        "intCitiesList": [
            {
                "CityCode": "PAR",
                "GeoId": "F00205",
                "CountryName": "法国",
                "StateName": "法兰西岛大区",
                "StateCode": "FR法兰西岛大区",
                "CityEnName": "Paris",
                "CityName": "巴黎",
                "CountryEnName": "France",
                "CountryCode": "FR",
                "StateEnName": "Ile De France"
            },
            {
                "CityCode": "FFT",
                "GeoId": "F01298",
                "CountryName": "美国",
                "StateName": "肯塔基州",
                "StateCode": "US肯塔基州",
                "CityEnName": "Frankfort",
                "CityName": "法兰克福",
                "CountryEnName": "The United States",
                "CountryCode": "US",
                "StateEnName": "Kentucky"
            },
            {
                "CityCode": "HKG",
                "GeoId": "F01603",
                "CountryName": "中国香港",
                "StateName": "香港",
                "StateCode": "HK香港",
                "CityEnName": "Hong Kong",
                "CityName": "香港",
                "CountryEnName": "Hong Kong",
                "CountryCode": "HK",
                "StateEnName": "Hong Kong"
            },
            {
                "CityCode": "KUL",
                "GeoId": "F02106",
                "CountryName": "马来西亚",
                "StateName": null,
                "StateCode": "MY",
                "CityEnName": "Kuala Lumpur",
                "CityName": "吉隆坡",
                "CountryEnName": "Malaysia",
                "CountryCode": "MY",
                "StateEnName": null
            },
            {
                "CityCode": "LON",
                "GeoId": "F02282",
                "CountryName": "英国",
                "StateName": "大伦敦",
                "StateCode": "GB大伦敦",
                "CityEnName": "London",
                "CityName": "伦敦",
                "CountryEnName": "United Kingdom",
                "CountryCode": "GB",
                "StateEnName": "Greater London"
            },
            {
                "CityCode": "LSQ",
                "GeoId": "F02319",
                "CountryName": "智利",
                "StateName": null,
                "StateCode": "CL",
                "CityEnName": "Los Angeles",
                "CityName": "洛杉矶",
                "CountryEnName": "Chile",
                "CountryCode": "CL",
                "StateEnName": null
            },
            {
                "CityCode": "SEL",
                "GeoId": "F03450",
                "CountryName": "韩国",
                "StateName": "首尔特别市",
                "StateCode": "KR首尔特别市",
                "CityEnName": "Seoul",
                "CityName": "首尔",
                "CountryEnName": "Korea South",
                "CountryCode": "KR",
                "StateEnName": "Seoul"
            },
            {
                "CityCode": "SIN",
                "GeoId": "F03488",
                "CountryName": "新加坡",
                "StateName": null,
                "StateCode": "SG",
                "CityEnName": "Singapore",
                "CityName": "新加坡",
                "CountryEnName": "Singapore",
                "CountryCode": "SG",
                "StateEnName": null
            },
            {
                "CityCode": "TPE",
                "GeoId": "F03857",
                "CountryName": "中国台湾",
                "StateName": "台湾",
                "StateCode": "TW台湾",
                "CityEnName": "Taipei",
                "CityName": "台北",
                "CountryEnName": "Taiwan, Province of",
                "CountryCode": "TW",
                "StateEnName": "Taiwan"
            },
            {
                "CityCode": "TYO",
                "GeoId": "F03922",
                "CountryName": "日本",
                "StateName": "东京都",
                "StateCode": "JP东京都",
                "CityEnName": "Tokyo",
                "CityName": "东京",
                "CountryEnName": "Japan",
                "CountryCode": "JP",
                "StateEnName": "Tokyo"
            },
            {
                "CityCode": "YVR",
                "GeoId": "F04488",
                "CountryName": "加拿大",
                "StateName": "不列颠哥伦比亚省",
                "StateCode": "CA不列颠哥伦比亚省",
                "CityEnName": "Vancouver",
                "CityName": "温哥华",
                "CountryEnName": "Canada",
                "CountryCode": "CA",
                "StateEnName": "British Columbia"
            },
            {
                "CityCode": "NGO",
                "GeoId": "F04814",
                "CountryName": "日本",
                "StateName": "爱知县",
                "StateCode": "JP爱知县",
                "CityEnName": "Nagoya",
                "CityName": "名古屋",
                "CountryEnName": "Japan",
                "CountryCode": "JP",
                "StateEnName": "Nagasaki"
            },
            {
                "CityCode": "BKK",
                "GeoId": "F05784",
                "CountryName": "泰国",
                "StateName": null,
                "StateCode": "TH",
                "CityEnName": "Bangkok",
                "CityName": "曼谷",
                "CountryEnName": "Thailand",
                "CountryCode": "TH",
                "StateEnName": null
            },
            {
                "CityCode": "MNL",
                "GeoId": "F07276",
                "CountryName": "菲律宾",
                "StateName": "马尼拉大都会",
                "StateCode": "PH马尼拉大都会",
                "CityEnName": "Manila",
                "CityName": "马尼拉",
                "CountryEnName": "Philippines",
                "CountryCode": "PH",
                "StateEnName": "Metro Manila"
            },
            {
                "CityCode": "NYC",
                "GeoId": "F07522",
                "CountryName": "美国",
                "StateName": "纽约州",
                "StateCode": "US纽约州",
                "CityEnName": "New York",
                "CityName": "纽约",
                "CountryEnName": "The United States",
                "CountryCode": "US",
                "StateEnName": "New York"
            },
            {
                "CityCode": "OSA",
                "GeoId": "F07643",
                "CountryName": "日本",
                "StateName": "大阪府",
                "StateCode": "JP大阪府",
                "CityEnName": "Osaka",
                "CityName": "大阪",
                "CountryEnName": "Japan",
                "CountryCode": "JP",
                "StateEnName": "Osaka"
            },
            {
                "CityCode": "PUS",
                "GeoId": "F07887",
                "CountryName": "韩国",
                "StateName": "釜山广域市",
                "StateCode": "KR釜山广域市",
                "CityEnName": "Busan",
                "CityName": "釜山",
                "CountryEnName": "Korea South",
                "CountryCode": "KR",
                "StateEnName": "Busan"
            },
            {
                "CityCode": "FRA",
                "GeoId": "F09525",
                "CountryName": "德国",
                "StateName": "黑森州",
                "StateCode": "DE黑森州",
                "CityEnName": "Frankfurt",
                "CityName": "法兰克福",
                "CountryEnName": "Germany",
                "CountryCode": "DE",
                "StateEnName": "Hessen"
            },
            {
                "CityCode": "LAX",
                "GeoId": "F09611",
                "CountryName": "美国",
                "StateName": "加利福尼亚州",
                "StateCode": "US加利福尼亚州",
                "CityEnName": "Los Angeles",
                "CityName": "洛杉矶",
                "CountryEnName": "The United States",
                "CountryCode": "US",
                "StateEnName": "California"
            },
            {
                "CityCode": "MXA",
                "GeoId": "F09668",
                "CountryName": "美国",
                "StateName": "犹他州",
                "StateCode": "US犹他州",
                "CityEnName": "Manila",
                "CityName": "马尼拉",
                "CountryEnName": "The United States",
                "CountryCode": "US",
                "StateEnName": "Utah"
            },
            {
                "CityCode": "YXU",
                "GeoId": "F09912",
                "CountryName": "加拿大",
                "StateName": "安大略省",
                "StateCode": "CA安大略省",
                "CityEnName": "London",
                "CityName": "伦敦",
                "CountryEnName": "Canada",
                "CountryCode": "CA",
                "StateEnName": "Ontario"
            },
            {
                "CityCode": "MFM",
                "GeoId": "F09999",
                "CountryName": "中国澳门",
                "StateName": "澳门",
                "StateCode": "MO澳门",
                "CityEnName": "Macau",
                "CityName": "澳门",
                "CountryEnName": "Macau SAR",
                "CountryCode": "MO",
                "StateEnName": "Macau"
            }
        ],
        "cnCitiesList": [
            {
                "CityCode": "TSN",
                "GeoId": "L00002",
                "CountryName": "中国",
                "StateName": "天津",
                "StateCode": "CN天津",
                "CityEnName": "Tianjin",
                "CityName": "天津名字超长我任性",
                "CountryEnName": "China",
                "CountryCode": "CN",
                "StateEnName": "Tianjin"
            },
            {
                "CityCode": "DLC",
                "GeoId": "L00336",
                "CountryName": "中国",
                "StateName": "辽宁",
                "StateCode": "CN辽宁",
                "CityEnName": "Dalian",
                "CityName": "大连五个字",
                "CountryEnName": "China",
                "CountryCode": "CN",
                "StateEnName": "Liaoning"
            },
            {
                "CityCode": "NKG",
                "GeoId": "L00510",
                "CountryName": "中国",
                "StateName": "江苏",
                "StateCode": "CN江苏",
                "CityEnName": "Nanjing",
                "CityName": "南京都说我最长，那我还真不客气了",
                "CountryEnName": "China",
                "CountryCode": "CN",
                "StateEnName": "Jiangsu"
            },
            {
                "CityCode": "HGH",
                "GeoId": "L00564",
                "CountryName": "中国",
                "StateName": "浙江",
                "StateCode": "CN浙江",
                "CityEnName": "Hangzhou",
                "CityName": "杭州",
                "CountryEnName": "China",
                "CountryCode": "CN",
                "StateEnName": "Zhejiang"
            },
            {
                "CityCode": "NGB",
                "GeoId": "L00569",
                "CountryName": "中国",
                "StateName": "浙江",
                "StateCode": "CN浙江",
                "CityEnName": "Ningbo",
                "CityName": "宁波",
                "CountryEnName": "China",
                "CountryCode": "CN",
                "StateEnName": "Zhejiang"
            },
            {
                "CityCode": "FOC",
                "GeoId": "L00706",
                "CountryName": "中国",
                "StateName": "福建",
                "StateCode": "CN福建",
                "CityEnName": "Fuzhou",
                "CityName": "福州",
                "CountryEnName": "China",
                "CountryCode": "CN",
                "StateEnName": "Fujian"
            },
            {
                "CityCode": "XMN",
                "GeoId": "L00715",
                "CountryName": "中国",
                "StateName": "福建",
                "StateCode": "CN福建",
                "CityEnName": "Xiamen",
                "CityName": "厦门",
                "CountryEnName": "China",
                "CountryCode": "CN",
                "StateEnName": "Fujian"
            },
            {
                "CityCode": "TNA",
                "GeoId": "L00861",
                "CountryName": "中国",
                "StateName": "山东",
                "StateCode": "CN山东",
                "CityEnName": "Jinan",
                "CityName": "济南",
                "CountryEnName": "China",
                "CountryCode": "CN",
                "StateEnName": "Shandong"
            },
            {
                "CityCode": "TAO",
                "GeoId": "L00866",
                "CountryName": "中国",
                "StateName": "山东",
                "StateCode": "CN山东",
                "CityEnName": "Qingdao",
                "CityName": "青岛",
                "CountryEnName": "China",
                "CountryCode": "CN",
                "StateEnName": "Shandong"
            },
            {
                "CityCode": "CGO",
                "GeoId": "L00962",
                "CountryName": "中国",
                "StateName": "河南",
                "StateCode": "CN河南",
                "CityEnName": "Zhengzhou",
                "CityName": "郑州",
                "CountryEnName": "China",
                "CountryCode": "CN",
                "StateEnName": "Hena"
            },
            {
                "CityCode": "WUH",
                "GeoId": "L01086",
                "CountryName": "中国",
                "StateName": "湖北",
                "StateCode": "CN湖北",
                "CityEnName": "Wuhan",
                "CityName": "武汉",
                "CountryEnName": "China",
                "CountryCode": "CN",
                "StateEnName": "Hubei"
            },
            {
                "CityCode": "CSX",
                "GeoId": "L01162",
                "CountryName": "中国",
                "StateName": "湖南",
                "StateCode": "CN湖南",
                "CityEnName": "Changsha",
                "CityName": "长沙",
                "CountryEnName": "China",
                "CountryCode": "CN",
                "StateEnName": "Huna"
            },
            {
                "CityCode": "CAN",
                "GeoId": "L01262",
                "CountryName": "中国",
                "StateName": "广东",
                "StateCode": "CN广东",
                "CityEnName": "Guangzhou",
                "CityName": "广州",
                "CountryEnName": "China",
                "CountryCode": "CN",
                "StateEnName": "Guangdong"
            },
            {
                "CityCode": "SZX",
                "GeoId": "L01271",
                "CountryName": "中国",
                "StateName": "广东",
                "StateCode": "CN广东",
                "CityEnName": "Shenzhen",
                "CityName": "深圳",
                "CountryEnName": "China",
                "CountryCode": "CN",
                "StateEnName": "Guangdong"
            },
            {
                "CityCode": "SYX",
                "GeoId": "L01427",
                "CountryName": "中国",
                "StateName": "海南",
                "StateCode": "CN海南",
                "CityEnName": "Sanya",
                "CityName": "三亚",
                "CountryEnName": "China",
                "CountryCode": "CN",
                "StateEnName": "Haina"
            },
            {
                "CityCode": "CKG",
                "GeoId": "L01445",
                "CountryName": "中国",
                "StateName": "重庆",
                "StateCode": "CN重庆",
                "CityEnName": "Chongqing",
                "CityName": "重庆",
                "CountryEnName": "China",
                "CountryCode": "CN",
                "StateEnName": "Chongqing"
            },
            {
                "CityCode": "CTU",
                "GeoId": "L01460",
                "CountryName": "中国",
                "StateName": "四川",
                "StateCode": "CN四川",
                "CityEnName": "Chengdu",
                "CityName": "成都",
                "CountryEnName": "China",
                "CountryCode": "CN",
                "StateEnName": "Sichuan"
            }
        ]
    },
    "errno": "0",
    "errmsg": "获取热门城市"
}
```
:::