const path = require("path");

module.exports = {
  pages: {
    index: {
      entry: "examples/main.js",
      template: "public/index.html",
      filename: "index.html",
    },
  },

  chainWebpack: (config) => {
    config.resolve.alias
      .set("@", path.resolve("examples"))
      .set("~", path.resolve("packages"));
    // 把 packages 和 examples 加入编译，因为新增的文件默认是不被 webpack 处理的

    config.module
      .rule("js")
      .include.add(/package/)
      .end()
      .include.add(/examples/)
      .end()
      .use("babel")
      .loader("babel-loader")
      .tap((options) => {
        // 修改它的选项...
        return options;
      });
  },
};
