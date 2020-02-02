const path = require("path");
const merge = require("webpack-merge");
const parts = require("./webpack.config.parts");

module.exports = merge(
  {
    context: path.join(__dirname, "./src"),

    entry: {
      starter: ["./starter/index.tsx"]
    },
    node: {
      fs: "empty"
    },
    output: {
      path: path.join(__dirname, "dist/starter"),
      filename: "[name].[hash].min.js",
      publicPath: "/starter",
      sourceMapFilename: "[name].[hash].js.map",
      chunkFilename: "[id].[hash].min.js"
    },

    mode: "production",
    devtool: "source-map"
  },
  parts.plugins(),
  parts.optimization(),
  parts.loaders(),
  parts.resolve()
);
