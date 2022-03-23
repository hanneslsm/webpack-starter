var path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

/**
 * VARIABLES
 */
const jsPath = "./assets/src/js";
const htmlPath = "./assets/src/html";
const scssPath = "./assets/src/scss";
const cssPath = "./assets/src/css";
const imgPath = "./assets/src/img";

module.exports = {
  /**
   * ENTRY POINTS
   */
  entry: {
    main: jsPath + "/index.js",
    vendor: jsPath + "/vendor.js",
    style: scssPath + "/style.scss",
  },

  /**
   * PLUGINS
   */
  plugins: [
    /* HtmlWebpackPlugin */
    new HtmlWebpackPlugin({
      template: htmlPath + "/index.html",
    }),
  ],

  /**
   * RULES
   */
  module: {
    rules: [
      /* HTML */
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
    ],
  },
};
