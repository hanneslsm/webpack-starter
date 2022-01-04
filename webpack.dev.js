var path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");
const Autoprefixer = require('autoprefixer');

/**
 * Console log message
 */
console.log('**************************** \n We are in development mode!');

/**
 * VARIABLES
 */
const localDomain = "http://localhost:8888"; // Local Development URL for BrowserSync. Change if needed.
const outputPath = "dist";

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
          { loader: "css-loader" }, // 3. Turns css into commonjs
          /* disabled for speed purposes
          { loader: "postcss-loader", // 2. Use Post-css with autoprefixer to make the code compatible to more browsers
            options: {
              postcssOptions: {
                plugins: ["autoprefixer", "postcss-preset-env"]
              }
            }
          },
          */
          { loader: "sass-loader"}, // 1. Turns scss into css
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
