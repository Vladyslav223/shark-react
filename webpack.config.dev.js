const path = require("path");
const a = {
  mode: "production",
  entry: path.join(__dirname, "/src/index.js"),
  output: {
    path: "/",
    filename: "bundle.js",
    // path: path.join(__dirname, 'dist'),
    publicPath: "/static/"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [
          path.join(__dirname, "src"),
          path.join(__dirname, "server/shared")
        ],
        use: [
          {
            loader: "babel-loader",
            options: { presets: ["env", "react"] }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "file-loader"
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx", ".css"]
  }
};
module.exports = a;
