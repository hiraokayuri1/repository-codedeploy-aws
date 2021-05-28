const baseConfig = require("./webpack.config.base");
const { merge } = require("webpack-merge");
const webpack = require("webpack");

//	System Enviroment Variable
const DOMAIN_API = JSON.stringify("http://localhost:4000");

const config = merge(baseConfig, {
  mode: "development",
  watch: true,
  devServer: {
    contentBase: "dist",
    open: true,
    historyApiFallback: true
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": { DOMAIN_API }
    })
  ]
});

module.exports = config;
