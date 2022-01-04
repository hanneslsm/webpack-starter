var path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

/**
 * VARIABLES
 */
const jsPath = "./src/js";
const htmlPath = "./src/html";
const scssPath = "./src/scss";
const cssPath = "./src/css";
const imgPath = "./src/img";

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
