module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        loaders: [
          require.resolve("style-loader"),
          {
            loader: require.resolve("css-loader"),
            options: {
              modules: {
                localIdentName: "[name]__[local]___[hash:base64:5]"
              }
            }
          }
        ]
      }
    ]
  }
};
