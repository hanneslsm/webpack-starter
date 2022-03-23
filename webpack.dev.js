var path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");

/**
 * Console log message
 */
 console.log("*************************** \n 💻 💻 💻 💻 💻 💻 💻 💻 💻   \n We are in development mode!");


/**
 * VARIABLES
 */
const localDomain = "http://localhost:8888"; // Local Development URL for BrowserSync. Change if needed.
const outputPath = "assets/dist";

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, outputPath),
    clean: true,
  },

  /**
   * PLUGINS
   */
  plugins: [
    /* BrowseSync */
    new BrowserSyncPlugin({
      proxy: localDomain,
      injectChanges: true,
      reload: true,
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
          { loader: "style-loader" }, // 3. Injects styles into the DOM
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
