// for Hot Module Replacement
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');

const config = {
  mode: 'development',
  context: __dirname,
  devtool: 'eval-source-map',
  entry: ['./src/index.js'],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['source-map-loader'],
        enforce: 'pre',
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
              plugins: ['@babel/plugin-proposal-class-properties'],
            },
          },
          'eslint-loader',
        ],
      },
      {
        test: /\.(css|sass|scss)$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]__[local]___[hash:base64:5]',
              },
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.(css|sass|scss)$/,
        include: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: { limit: 40000 },
          },
          'svg-fill-loader',
          'image-webpack-loader',
        ],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    // use HtmlWebpackPlugin to auto generate the index.html file
    // based on a template (index_template)
    new HtmlWebpackPlugin({
      title: 'React Link Group - Demo',
      template: './src/index_template.html',
      filename: 'index.html',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new CircularDependencyPlugin({
      // exlude detection of files based on a RegExp
      exclude: /a\.js|node_modules/,
      // add errors to webpack instead of warnings
      failOnError: true,
      // set the current working directory for displaying module paths
      cwd: process.cwd(),
    }),
  ],
  devServer: {
    // Silence WebpackDevServer's own logs since they're generally not useful.
    // It will still show compile warnings and errors with this setting.
    clientLogLevel: 'none',
    // Enable gzip compression of generated files.
    compress: true,
    // where to pull the source from
    contentBase: './src',
    // enable hot module replacement
    hot: true,
    // launch a browser by default on start up
    open: true,
  },
};

module.exports = config;
