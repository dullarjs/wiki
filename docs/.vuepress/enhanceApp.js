/*
* @Author: Just be free
* @Date:   2020-07-10 10:06:14
* @Last Modified by:   Just be free
* @Last Modified time: 2021-12-02 09:56:13
* @E-mail: justbefree@126.com
*/
// 使用异步函数也是可以的
// import ClipboardJS from "clickboard";
// console.log(ClipboardJS);
export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData, // 站点元数据
  isServer // 当前应用配置是处于 服务端渲染 或 客户端
}) => {
  if(!isServer){
    // import('@dullar/earth/lib/@dullar/earth.umd.min.js').then(module => {
    //   Vue.use(module)
    // });
  }
};
