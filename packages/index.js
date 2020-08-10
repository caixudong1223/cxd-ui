import CxdTest from "./test";

// 所有组件列表
const components = [CxdTest];

const install = function(Vue) {
  if (install.installed) return;
  install.installed = true;
  components.map((component) => Vue.component(component.name, component));
  // or
  // components.map((component) => Vue.use(component));
};

// 检测到 Vue 才执行，毕竟我们是基于 Vue 的
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

// 导出所有组件及install方法，支持按需加载
export default {
  install,
  ...components,
};
