/*
* @Author: Just be free
* @Date:   2020-07-10 09:56:25
* @Last Modified by:   Just be free
* @Last Modified time: 2021-11-15 09:58:18
* @E-mail: justbefree@126.com
*/
const themeConfig = require("./themeConfig");
const base = process.env.NODE_ENV === 'production' ? "/" : "/";
module.exports = {
  // title: "yn-components 组件案例文档",
  // description: "前端基础组件技术文档",
  base, // 基础路径
  markdown: {
    lineNumbers: true
  },
  themeConfig,
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
      title: 'Dullarjs - 元年云前端技术开放平台',
      description: '🛠️ 元年云前端技术开放平台 - 开发的标准脚手架及组件库'
    }
    // '/zh/': {
    //   lang: 'zh-CN',
    //   title: 'yn-components 组件案例文档',
    //   description: '前端基础组件技术文档'
    // }
  },
  configureWebpack: {
    resolve: {
      alias: {
        // '@alias': 'path/to/some/dir'
      }
    }
  }
};
