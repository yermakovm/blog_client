const { defineConfig } = require("@vue/cli-service");
const path = require("path");
const fs = require("fs");

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    https: {
      key: fs.readFileSync("./cert/localhost+2-key.pem"),
      cert: fs.readFileSync("./cert/localhost+2.pem"),
    },
    port: "8001",
  },
  chainWebpack: (config) => {
    const types = ["vue-modules", "vue", "normal-modules", "normal"];
    types.forEach((type) =>
      addStyleResource(config.module.rule("scss").oneOf(type))
    );
  },
});

function addStyleResource(rule) {
  rule
    .use("style-resource")
    .loader("style-resources-loader")
    .options({
      patterns: [path.resolve(__dirname, "./src/styles/_variables.scss")],
    });
}
