
module.exports = {
  entry: {
    "mobile-recharge" : "./src/mobileRecharge/index.js",
    "order-confirm" : "./src/orderConfirm/index.js"
  },
  output: {
    path: './build',
    publicPath: 'build/',
    filename: '[name].js'
  },
  resolve:{
    extensions:['','.js','.vue']
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        exclude: /node_modules|vue\/src|vue-router\/|vue-loader\/|vue-hot-reload-api\//,
        loader: 'babel'
      },
      {
        // edit this for additional asset file types
        test: /\.(png|jpg|gif)$/,
        loader: 'file?name=[name].[ext]?[hash]'
      }
    ]
  },
  // example: if you wish to apply custom babel options
  // instead of using vue-loader's default:
  babel: {
    presets: ['es2015', 'stage-0'],
    plugins: ['transform-runtime']
  },
  devtool : '#source-map'
}
