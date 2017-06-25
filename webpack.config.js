const webpack = require('webpack');
const path = require('path');


module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/js/foundation.min.js',
    './app/app.jsx'],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  resolve: {
    root: __dirname,
    modulesDirectories: [
      'node_modules',
      './app/components'
    ],
    alias: {
      'applicationStyles': 'app/styles/app.scss'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [{
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015', 'stage-0']
      },
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/
    }]
  },
  sassLoader: {
    includePaths: [
      path.resolve(__dirname, './node_modules/foundation-sites/scss')
    ]
  },
  devTool: 'cheap-module-eval-source-map'
};
