import Vue from "vue";
import App from "./App.vue";

// 导入组件库
import CxdUI from "./../packages";
// 注册所以组件
Vue.use(CxdUI);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
