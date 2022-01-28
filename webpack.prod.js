var path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

/**
 * Console log message
 */
console.log("*************************** \n 🚚 🚚 🚚 🚚 🚚 🚚 🚚 🚚 🚚  \n We are in production mode!");

/**
 * VARIABLES
 */
const localDomain = "http://localhost:8888"; // Local Development URL for BrowserSync. Change if needed.
const outputPath = "assets/dist";

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "[name]-[contenthash].bundle.js",
    path: path.resolve(__dirname, outputPath),
    clean: true,
  },

  /**
   * PLUGINS
   */
  plugins: [
        /* MiniCssExtract */
        new MiniCssExtractPlugin({
          filename: "[name]-[contenthash].css",
        }), 
  ],

  /**
   * RULES
   */
  module: {
    rules: [
      /* Styles */
      {
        test: /\.s?[c]ss$/i,
        use: [
          { loader: MiniCssExtractPlugin.loader }, // 3. Extract css into files 
          { loader: "css-loader" }, // 2. Turns css into commonjs
          { loader: "postcss-loader" }, // 1. Use Post-css
        ],
      },
      /* Ressources */
      {
        test: /\.(jpg|jpeg|png|gif|woff|woff2|eot|ttf|svg)$/i,
        type: "asset/resource",
      },
    ],
  },
});
