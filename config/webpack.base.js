const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const MiniCssExtractplugin = require("mini-css-extract-plugin");

const isDevelopment = process.env.NODE_ENV !== "production";

const px2rem = {
  loader: "px2rem-loader",
  options: {
    remUnit: 750, // 40px = 1rem
    remPrecision: 8, // rem的小数点后位数
  },
};

module.exports = {
  entry: path.join(__dirname, "../src/index.tsx"),
  module: {
    rules: [
      {
        test: /\.less$/,
        // exclude: /node_modules/,
        use: [
          "style-loader",
          // MiniCssExtractplugin.loader,
          "css-loader",
          "postcss-loader",
          px2rem,
          {
            loader: "less-loader",
            options: {
              lessOptions: {
                javascriptEnabled: true,
              },
            },
          },
        ],
      },
      {
        test: /\.css$/,
        // exclude: /node_modules/,
        use: [
          // MiniCssExtractplugin.loader,
          "style-loader",
          "css-loader",
          "postcss-loader",
          px2rem,
        ],
      },
      // {
      //   test: /\.(png)$/,
      //   // exclude: /node_modules/,
      //   use: [
      //     'file-loader',
      //   ]
      // },
      {
        test: /\.(jpeg|jpg|png|svg|gif|webp|mov|mp4|3gp|mp3)$/,
        use: {
          loader: "url-loader", // 默认使用的是es6模块
          options: {
            // 配置
            esModule: false, // 使用common.js规范
            limit: 0 * 1024, // 小于20k转为base64
          },
        },
      },
    ],
  },
  resolve: {
    alias: {},
    extensions: ["*", ".vue", ".js", ".jsx", ".tsx", ".ts", ".json"],
  },
  plugins: [
    new htmlWebpackPlugin({
      template: path.join(__dirname, "../public/index.html"),
      filename: "index.html",
    }),
    new webpack.DefinePlugin({
      "process.env": JSON.stringify({
        NODE_ENV: process.env.NODE_ENV,
      }),
    }),
    new MiniCssExtractplugin({
      filename: 'main.[contenthash:8].css'
    })
  ],
};
