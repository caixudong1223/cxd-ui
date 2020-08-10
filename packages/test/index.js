import CxdTest from "./src/test.vue";

CxdTest.install = (Vue) => {
  Vue.component(CxdTest.name, CxdTest);
};

export default CxdTest;
