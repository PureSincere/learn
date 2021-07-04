const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const package = require("./package.json");

const config = {
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
  entry: path.resolve(__dirname, "./src/app.ts"),
  output: {
    filename: "[name][hash].js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["es2015", "es2016", "es2017", "stage-0", "react"],
              plugins: ["transform-decorators-legacy"]
            }
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.ts?$/,
        use: ["babel-loader", "ts-loader"],
        include: /src/,
        exclude: /node_modules/
      },
      {
        test: /\.(js|ts|jsx)?$/,
        use: [{ loader: "eslint-loader" }],
        include: /src/
      }
    ]
  },
  optimization: {
    minimize: false
  },
  devtool: process.env.NODE_ENV === "production" ? false : "source-map",
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, "./public/index.html"),
      filename: path.resolve(__dirname, "./dist/index.html"),
      title: package.description,
      inject: true,
      hash: true
    })
  ]
};

module.exports = config;
