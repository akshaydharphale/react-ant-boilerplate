const path = require("path");
const webpack = require("webpack");
const ProgressBarPlugin = require("progress-bar-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

exports.resolve = function() {
  return {
    resolve: {
      extensions: [".js", ".jsx", ".ts", ".tsx"]
    }
  };
};

exports.loaders = function() {
  return {
    module: {
      rules: [
        {
          test: /\.css$/,
          exclude: path.join(__dirname, "src"),
          use: "style!css"
        },
        {
          test: /\.css$/,
          include: path.join(__dirname, "src"),
          use: [MiniCssExtractPlugin.loader, "css-loader"]
        },
        {
          test: /\.less$/,
          use: [
            MiniCssExtractPlugin.loader,
            "css-loader",
            {
              loader: "less-loader",
              options: {
                modifyVars: {
                  "primary-color": "#2d7dd2",
                  "accent-color": "#2ecc71",
                  "text-color": "#43484e"
                },
                javascriptEnabled: true
              }
            }
          ]
        },
        {
          test: /\.(ts|tsx)?$/,
          loader: "awesome-typescript-loader"
        },
        {
          enforce: "pre",
          test: /\.js$/,
          loader: "source-map-loader"
        },
        {
          test: /\.(png|jpg|jpeg|gif|svg)$/,
          use: "url-loader?prefix=./img/&limit=10000"
        },
        {
          test: /\.(woff|woff2|ttf|eot)$/,
          use: "url-loader?prefix=font/&limit=10000"
        }
      ]
    }
  };
};

exports.optimization = function() {
  return {
    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          cache: true,
          parallel: true
        }),
        new OptimizeCSSAssetsPlugin({})
      ],
      splitChunks: {
        cacheGroups: {
          vendors: {
            name: "vendors",
            test: /[\\/]node_modules[\\/]/,
            chunks: "all"
          }
        }
      },
      noEmitOnErrors: true,
      namedChunks: true,
      occurrenceOrder: true
    }
  };
};

exports.plugins = function() {
  return {
    plugins: [
      require("autoprefixer"),
      new webpack.BannerPlugin("Starter"),
      new ProgressBarPlugin(),
      new HtmlWebpackPlugin({
        filename: "index.html",
        template: "./starter/index.html",
        inject: "body",
        chunks: ["starter", "vendors"]
      }),
      new MiniCssExtractPlugin({
        filename: "[name].css",
        chunkFilename: "[id].css"
      })
    ]
  };
};

exports.output = function() {
  return {
    output: {
      path: path.join(__dirname, "dist/starter"),
      filename: "[name].[hash].min.js",
      publicPath: "/starter",
      sourceMapFilename: "[name].[hash].js.map",
      chunkFilename: "[id].[hash].min.js"
    }
  };
};
