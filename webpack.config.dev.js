const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const parts = require("./webpack.config.parts");

module.exports = merge(
  {
    context: path.join(__dirname, "./src"),
    entry: {
      starter: [
        "webpack-hot-middleware/client?reload=true",
        "./starter/index.tsx"
      ]
    },
    node: {
      fs: "empty"
    },
    mode: "development",
    devtool: "cheap-module-eval-source-map",

    plugins: [new webpack.HotModuleReplacementPlugin()]
  },
  parts.output(),
  parts.plugins(),
  parts.optimization(),
  parts.loaders(),
  parts.resolve()
);
