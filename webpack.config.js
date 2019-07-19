const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');

module.exports = {
  mode: 'production',
  devtool: 'source-map',

  entry: {
    app: './src/app.tsx'
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },

  resolve: {
    extensions: [
      '.js',
      '.ts',
      '.tsx'
    ]
  },

  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          { loader: 'ts-loader' }
        ]
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader'
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader', // creates style nodes from JS strings
          'css-loader', // translates CSS into CommonJS
          'sass-loader' // compiles Sass to CSS, using Node Sass by default
        ]
      }
    ]
  },

  optimization: {
    namedModules: true,
    splitChunks: {
      chunks: 'async',
      cacheGroups: {
        app: {
          reuseExistingChunk: true,
        },
        vendor: {
          test: /node_modules/,
          chunks: 'all',
          name: 'vendor'
        }
      }
    }
  },

  performance: {
    maxEntrypointSize: 300000,
    maxAssetSize: 300000
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new HtmlWebpackHarddiskPlugin()
  ],

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  }
};
