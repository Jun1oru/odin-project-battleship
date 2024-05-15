const path = require("path");

module.exports = {
  entry: {
    app: "./src/index.js",
  },
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    environment: {
      arrowFunction: false,
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        type: "asset/resource",
      },
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: { node: "current" } }]],
            cacheDirectory: true,
          },
        },
      },
    ],
  },
};
