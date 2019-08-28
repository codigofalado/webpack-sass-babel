const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");

module.exports = merge(common, {
  mode: "development",
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader", //4. Injeta CSS no DOM
          "css-loader", // 3. De css para vanilla js
          {
            loader: "postcss-loader", // 2. Adiciona Autoprefixer no CSS
            options: {
              ident: "postcss",
              plugins: [require("autoprefixer")]
            }
          },
          "sass-loader" //1. De SASS para o CSS
        ]
      }
    ]
  }
});
