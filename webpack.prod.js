const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist")
  },
  optimization: {
    minimizer: [new OptimizeCssAssetsPlugin(), new TerserPlugin()]
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: "[name].css" }),
    new CleanWebpackPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, // 4. Salva o css em arquivos
          "css-loader", // 3. De css para vanilla js
          {
            loader: "postcss-loader", // 2. Adiciona Autoprefixer no CSS
            options: {
              ident: "postcss",
              plugins: [require("autoprefixer")]
            }
          },
          "sass-loader" // 1. De SASS para CSS
        ]
      }
    ]
  }
});
